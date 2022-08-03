import React from "react";
import {
  IoHandLeft,
  IoAnalyticsSharp,
  IoCashSharp,
  IoTrendingUp,
  IoWatchSharp,
} from "react-icons/io5";

const Benefits = () => {
  return (
    <div className="benefit-container reveal fade-bottom">
      <div className="benefit-heading">
        <h3>Never deploy a query contract ever again</h3>
        <p>Reduce protocol bloat, save on deployment costs, and make your projects more effiecent.</p>
      </div>

      <dl>
        <div className="block">
          <h3>Query data on seperate chains with just 1 tool.</h3>
          <p>SolQL is deployed on multiple blockchains so you don't have to worry about cross-chain data gathering</p>
        </div>
        <div className="block">
          <h3>
            Save the hassle and cost of deploying your own query contract.
          </h3>
          <p>Deploying your own query contract for every project is expensive and wasteful. </p>
        </div>
        <div className="block">
          <h3>Hedge against rising transaction costs.</h3>
          <p>Deploying contracts eat into any projects budget. Save that cost by using SolQL instead.</p>
        </div>
        <div className="block">
          <h3>Save development time</h3>
          <p>Developer time is precious. Save it by using SolQL's easy to use npm package to perform on-chain queries</p>
        </div>
      </dl>
    </div>
  );
};

export default Benefits;
