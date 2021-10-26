import React from "react";
import "../css/GeneralComponent.css";

export default function GeneralComponent() {
  return (
      <>
    <div className="general-component">
      <div className="general-left">
        <p className="subtitle">25+ YEARS OF EXPERIENCES</p>
        <h2 className="title">For give you better results.</h2>
        <p className="description">
          There are many variations of passages of Lorem Ipsum but majority have
          suffered alteration form by injected humour or randomised words.
        </p>
      </div>
      <div className="general-right">
        <a href="/" className="btn">Purchase Order</a>
      </div>
    </div>
  </>);
}
