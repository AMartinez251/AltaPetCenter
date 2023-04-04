import React from "react";
import { ReactComponent as Bone } from "../dogBone.svg";
import "./BoneDivider.css"

const BoneDivider = () => {
  return (
    <div className="bone-divider-cont">
        <div className="bone-divider">
          <div className="bone-container">
            <Bone className="bone"/>
          </div>
        </div>
    </div>
  );
};

export default BoneDivider;