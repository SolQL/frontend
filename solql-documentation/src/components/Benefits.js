import React from "react";
import { IoHandLeft } from "react-icons/io5";

const Benefits = () => {
  return (
    <div className="benefit-container">
      <div className="benefit-heading">
        <h3>Never deploy a query contract ever again</h3>
        <p>Save $$$$$$$$$$</p>
      </div>

      <dl>
        <div className="block">
          <IoHandLeft />
          <h4>Benefit #1</h4>
          <p>This is the first benefit</p>
        </div>
        <div className="block">
          <IoHandLeft />
          <h4>Benefit #2</h4>
          <p>This is the first benefit</p>
        </div>
        <div className="block">
          <IoHandLeft />
          <h4>Benefit #3</h4>
          <p>This is the first benefit</p>
        </div>
        <div className="block">
          <IoHandLeft />
          <h4>Benefit #4</h4>
          <p>This is the first benefit</p>
        </div>
      </dl>
    </div>
  );
};

export default Benefits;
