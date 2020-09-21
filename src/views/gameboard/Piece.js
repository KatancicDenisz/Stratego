import React from "react";
import { checkForValidPosition } from "./positions.js";

export function Piece({
  power,
  tile,
  img,
  onClick,
  currentFigure,
  id,
  x,
  y,
  firstSelect,
  playerTurn,
  showPower,
}) {
  return (
    <div
      className={tile}
      onClick={onClick}
      style={{
        background: checkForValidPosition(
          x,
          y,
          firstSelect,
          currentFigure,
          tile
        )
          ? "#33e303"
          : "",
      }}
    >
      {tile === "player1" ? (
        power === 0 ? (
          <div
            className="card"
            style={{
              opacity: firstSelect ? (id === currentFigure.id ? 1 : 0.6) : 1,
            }}
          >
            {playerTurn !== "p2" ? (
              <img src={img} alt=""></img>
            ) : showPower === id ? (
              <img src={img} alt=""></img>
            ) : null}
          </div>
        ) : (
          <div
            className="card"
            style={{
              opacity: firstSelect ? (id === currentFigure.id ? 1 : 0.6) : 1,
            }}
          >
            {playerTurn === "p2" ? (showPower === id ? power : "") : power}
          </div>
        )
      ) : tile === "player2" ? (
        power === 0 ? (
          <div
            className="card"
            style={{
              opacity: firstSelect ? (id === currentFigure.id ? 1 : 0.6) : 1,
            }}
          >
            {playerTurn !== "p1" ? (
              <img src={img} alt=""></img>
            ) : showPower === id ? (
              <img src={img} alt=""></img>
            ) : null}
          </div>
        ) : (
          <div
            className="card"
            style={{
              opacity: firstSelect ? (id === currentFigure.id ? 1 : 0.6) : 1,
            }}
          >
            {playerTurn === "p1" ? (showPower === id ? power : "") : power}
          </div>
        )
      ) : null}
    </div>
  );
}
