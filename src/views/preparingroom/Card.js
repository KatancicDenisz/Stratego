import React from "react";
import "../../assets/css/preparingroom.css";
import cn from "classnames";
export function Card({ card, onClick, selectedFigure }) {
  return (
    <div
      className={cn("ui card", {
        notSelectedCard: selectedFigure.id !== card.id,
        selectedCard: selectedFigure === 0,
      })}
      onClick={onClick}
    >
      <div
        className="ui slide masked reveal image"
        style={{
          backgroundColor: card.count === 0 ? "grey" : " #ff1a1a",
        }}
      >
        <div className="image visible content">
          <img src={card.icon} alt="" />
        </div>
        <p className="hidden content power">{card.power}</p>
      </div>
      <div
        className={
          card.count === 0
            ? "content contentColor0"
            : "content contentColorElse"
        }
      >
        <p className="rank">{card.title}</p>
        <div
          className="description"
          style={{ color: card.count === 0 ? "black" : "red" }}
        >
          {card.count} db
        </div>
      </div>
    </div>
  );
}
