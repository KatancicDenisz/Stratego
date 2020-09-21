import React from "react";
import cn from "classnames";

export function Playerimage({ title, icon, id, currentPlayer }) {
  return (
    <div id={id}>
      <h2
        className={cn("playerTitleHolder", {
          player1Title: currentPlayer === "p1" && id === "player1icon",
          player2Title: currentPlayer === "p2" && id === "player2icon",
        })}
      >
        {" "}
        {title}{" "}
      </h2>
      <img
        className={cn("ui tiny image players", {
          player1turn: currentPlayer === "p1" && id === "player1icon",
          player2turn: currentPlayer === "p2" && id === "player2icon",
        })}
        alt=""
        src={icon}
      />
    </div>
  );
}
