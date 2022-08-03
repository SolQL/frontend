import Link from "@docusaurus/Link";
import React from "react";

import {
  IoArrowForwardOutline,
  IoKey,
  IoPricetags,
  IoCloudOffline,
} from "react-icons/io5";

const GifComponent = () => {
  return (

      <div class="card-outline fade-2">
        <div className="left-benefit">
          <IoKey size={"25px"} />
          <h2>Free and Open Source</h2>
          <Link className="go-to-intro" to="/docs/intro">
            Get Started <IoArrowForwardOutline size={"15px"} />
          </Link>
        </div>

        <div className="middle-benefit">
          <IoPricetags size={"25px"} />
          <h2>Save on deployment costs</h2>
          <Link className="go-to-intro" to="/docs/intro">
            See how <IoArrowForwardOutline size={"15px"} />
          </Link>
        </div>

        <div className="right-benefit">
          <IoCloudOffline size={"25px"} />
          <h2>Reduce network bloat</h2>
          <Link className="go-to-intro" to="/docs/intro">
            View more <IoArrowForwardOutline size={"15px"} />
          </Link>
        </div>
      </div>

  );
};

export default GifComponent;
