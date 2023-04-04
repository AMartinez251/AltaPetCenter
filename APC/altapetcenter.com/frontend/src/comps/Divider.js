import React from "react";
import { ReactComponent as Paws } from "../Paw.svg";
import "./Divider.css"

const Divider = (props) => {
  return (
    <div className="divider-cont">
        <div className="divider">
          <div className="paws-container">
            <Paws className="paws" />
            <hr className="mid-line" />
            <h1 className="title">{props.title}</h1>
          </div>
          <hr className="line" />
        </div>
    </div>
  );
};

export default Divider;