import React from "react";
import question from "../../assets/icons/question.png";

export function CurrentFigureDesc({ currfig }) {
  const firstLoad = currfig === 0;
  return (
    <div className="item divtopmargin">
      <div className="ui tiny image">
        <img src={firstLoad ? question : currfig.icon} alt=""></img>
      </div>
      <div className="content">
        <div className="header figureNameTitle">
          {firstLoad ? "Nincs választott játékos" : currfig.title}
        </div>
        <div className="description figureDesc">
          <p>
            <span>Erősség:</span> {firstLoad ? "-" : currfig.power}
          </p>
          <p>
            <span> Képesség: </span> {firstLoad ? "-" : currfig.skill}
          </p>
        </div>
      </div>
    </div>
  );
}
