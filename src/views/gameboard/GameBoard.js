import React from "react";
import { Piece } from "./Piece.js";
import {
  checkForValidPosition,
  checkForBombSelected,
  dontAllowPlayer1,
  dontAllowPlayer2,
  checkForWin,
} from "./positions.js";

import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setCurrentPlayer,
  setCurrentFigure,
  setKilledFigure,
  setKilledFigure2,
} from "../../state/actions.js";

export function Gameboard({ setOpen }) {
  const [firstClick, setFirstClick] = useState(false);

  const currentPlayer = useSelector((state) => state.currentPlayer);
  const currentFigure = useSelector((state) => state.currentFigure);
  const arr = useSelector((state) => state.lineup);
  const dispatch = useDispatch();

  const [data, setData] = useState(arr);
  const [showPower, setShowPower] = useState(0);

  function handleClick(piece) {
    if (firstClick) {
      if (
        !checkForValidPosition(
          piece.x,
          piece.y,
          firstClick,
          currentFigure,
          piece.tile
        )
      )
        return;

      if (piece.id === currentFigure.id) {
        setFirstClick(false);
        return;
      }
      if (
        (currentPlayer === "p1" && piece.tile === "player2") ||
        (currentPlayer === "p2" && piece.tile === "player1")
      ) {
        setShowPower(piece.id);
        window.setTimeout(() => {
          setData(
            data.map((el) =>
              piece.power === 10 && currentFigure.power === 1
                ? el.id === piece.id
                  ? { ...el, tile: "empty", power: null }
                  : el
                : piece.title === "Bomba" && currentFigure.title === "Aknász"
                ? el.id === piece.id
                  ? { ...el, tile: "empty", power: null }
                  : el
                : piece.title === "Bomba" && currentFigure.title !== "Aknász"
                ? el.id === currentFigure.id
                  ? { ...el, tile: "empty", power: null }
                  : el
                : piece.power > currentFigure.power //Ha az ellenség bábúja erősebb
                ? currentFigure.id !== piece.id
                  ? el.id === currentFigure.id && el.title !== "Bomba" //Levesszük a sajátunkat
                    ? { ...el, tile: "empty", img: piece.icon, power: null }
                    : el
                  : el
                : piece.power < currentFigure.power //Ha a saját bábunk erősebb
                ? currentFigure.id !== piece.id
                  ? el.id === piece.id && el.title !== "Bomba" //Levesszük az ellenségét
                    ? {
                        ...el,
                        tile: "empty",
                        img: currentFigure.icon,
                        power: null,
                      }
                    : el
                  : el
                : el.id === piece.id //Levesszük az ellenségét
                ? { ...el, tile: "empty", img: piece.icon, power: null }
                : el.id === currentFigure.id
                ? {
                    ...el,
                    tile: "empty",
                    img: currentFigure.icon,
                    power: null,
                  }
                : el
            )
          );

          if (piece.power === currentFigure.power) {
            console.log(piece.id);
            console.log(currentFigure.id);
            dispatch(setKilledFigure({ ...currentFigure, wasTwoKilled: true }));
            dispatch(setKilledFigure2(piece));
          } else {
            console.log(piece.id);
            console.log(currentFigure.id);
            dispatch(setKilledFigure(currentFigure));
          }
          currentPlayer === "p1"
            ? dispatch(setCurrentPlayer("p2"))
            : dispatch(setCurrentPlayer("p1"));

          setShowPower(0);
        }, 3000);
        if (checkForWin(piece, currentPlayer)) {
          setOpen(true);
          return;
        }
      } else {
        setData(
          data.map((el) =>
            currentFigure.id !== piece.id
              ? el.id === currentFigure.id
                ? { ...el, tile: "empty", img: piece.icon }
                : el.id === piece.id
                ? {
                    ...el,
                    tile: currentFigure.tile,
                    power: currentFigure.power,
                    icon: currentFigure.icon,
                    title: currentFigure.title,
                  }
                : el
              : el
          )
        );
        currentPlayer === "p1"
          ? dispatch(setCurrentPlayer("p2"))
          : dispatch(setCurrentPlayer("p1"));
      }
      setFirstClick(false);
    } else {
      if (dontAllowPlayer1(piece, currentPlayer)) return;
      if (dontAllowPlayer2(piece, currentPlayer)) return;
      if (piece.tile === "empty") {
        console.log("Üres mező");
        setFirstClick(false);
        return;
      }
      if (checkForBombSelected(piece)) return;
      setFirstClick(true);
      dispatch(setCurrentFigure(piece));
    }
  }

  return (
    <div id="board">
      {data.map((c) => (
        <Piece
          power={c.power}
          tile={c.tile}
          img={c.icon}
          key={c.id}
          currentFigure={currentFigure}
          id={c.id}
          firstSelect={firstClick}
          x={c.x}
          y={c.y}
          title={c.title}
          showPower={showPower}
          playerTurn={currentPlayer}
          onClick={() => handleClick(c)}
        />
      ))}
    </div>
  );
}
