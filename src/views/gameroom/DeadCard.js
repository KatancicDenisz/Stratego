import React from "react";
import { useSelector } from "react-redux";

export function DeadCard({ deadcard }) {
  const killedFigure = useSelector((state) => state.killedFigure);
  //console.log(killedFigure);
  const foundTitle = killedFigure.find((el) => el.title === deadcard.title);
  // console.log(foundTitle);
  //console.log(foundTitle);
  //console.log(deadcard.id);

  //Az a baj hogy nem egyformák az indexek

  return (
    <div
      className={
        deadcard.tile === "player1"
          ? "player1deadfigures"
          : "player2deadfigures"
      }
      style={{
        opacity:
          foundTitle !== undefined
            ? !foundTitle.wasTwoKilled
              ? deadcard.title === foundTitle.title &&
                foundTitle.tile === deadcard.tile
                ? 1
                : 0.6
              : deadcard.title === foundTitle.title
              ? 1
              : 0.6
            : 0.6,
      }}
    >
      <div className="card">
        {deadcard.power === 0 ? (
          <img className="deadimg" src={deadcard.icon} alt=""></img>
        ) : (
          <p>{deadcard.power}</p>
        )}
      </div>
    </div>
  );
}
