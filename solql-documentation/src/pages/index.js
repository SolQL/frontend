import React, { useEffect } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import CardItem from "../components/cardItem";
import CodeBlock from "@theme/CodeBlock";
import Header from "../components/header";
import styles from "./index.module.css";
import Head from "@docusaurus/Head";
import GifComponent from "../components/GifComponent";
import Benefits from "../components/Benefits";
import ContactUs from "../components/ContactUs";
import BrowserOnly from "@docusaurus/BrowserOnly";

// function HomepageHeader() {
//   const { siteConfig } = useDocusaurusContext();
//   return (
//     <header className={clsx("hero hero--primary", styles.heroBanner)}>
//       <div className="container">
//         <h1 className="hero__title">{siteConfig.title}</h1>
//         <p className="hero__subtitle">{siteConfig.tagline}</p>
//         <div className={styles.buttons}>
//           <Link
//             className="button button--secondary button--lg"
//             to="/docs/intro"
//           >
//             Get Started
//           </Link>
//         </div>
//       </div>
//     </header>
//   );
// }

export default function Home() {
  function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }


  useEffect(() => {
    window.addEventListener("scroll", reveal)
  })

  return (
    <Layout>
    <Header />
      <main>
        <GifComponent />
        <Benefits />
        <ContactUs />
      </main>
      
    </Layout>
  );
}
