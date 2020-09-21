import React, { useEffect } from "react";
import { Tiles } from "./Tiles.js";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveBtn } from "../../state/preparingroom/actions.js";
import { setLineup } from "../../state/actions.js";
import { player2lineup } from "../../domain/lineup.js";
import { setCardsCollection } from "../../state/preparingroom/actions.js";
import { setFigureToDelete } from "../../state/preparingroom/actions.js";

export function PrepareBoard({
  boardSize,
  onClick,
  selectedFigure,
  setSelectedFigure,
  setDeleteBoard,
  deleteBoard,
}) {
  const [contextMenuDelete, setContextMenuDelete] = useState({ x: -1, y: -1 });

  const dispatch = useDispatch();
  //const figToDel = useSelector((state) => state.figToDel); //for deleting 1 figure
  const cardsCollection = useSelector((state) => state.cardsCollection);
  const emptyBoard = [];
  let counter = 0;
  //Ezt még kell alakítani univerzális táblákra
  for (let i = 0; i < boardSize - 2; i++) {
    for (let j = 0; j < boardSize; j++) {
      if (i < 2)
        emptyBoard.push({
          id: counter,
          tile: "player1",
          x: j,
          y: i,
          wasSelected: false,
        });
      else if (i >= 2 && i < 4)
        emptyBoard.push({
          id: counter,
          tile: "empty",
          x: j,
          y: i,
          wasSelected: false,
        });
      counter++;
    }
  }
  //A Második játékos bábújait előkészitettem és az arr-ból bepusholom
  player2lineup.forEach((v) => {
    emptyBoard.push(v);
  });

  const [board, setBoard] = useState(emptyBoard);

  const handleBoardClick = (tile, e) => {
    if (tile.tile !== "player1") return;

    //Ha már van bábú a kiválasztott mezőn ne rakja le
    if (tile.wasSelected) {
      dispatch(
        setCardsCollection(
          cardsCollection.map((e) =>
            e.id === selectedFigure.id
              ? {
                  ...e,
                  count: selectedFigure.count,
                }
              : e
          )
        )
      );
    } else {
      if (selectedFigure !== 0) {
        dispatch(
          setCardsCollection(
            //Csökkenti a kézben lévő lerakott bábú számát
            cardsCollection.map((e) =>
              e.id === selectedFigure.id
                ? e.count > 0
                  ? {
                      ...e,
                      count: e.count - 1,
                    }
                  : e
                : e
            )
          )
        );
        setBoard(
          board.map((card) =>
            card.x === tile.x && card.y === tile.y //Kirendereli a kiválasztott bábút a mezőre
              ? {
                  ...card,
                  wasSelected: true,
                  title: selectedFigure.title,
                  power: selectedFigure.power,
                  icon: selectedFigure.icon,
                  skill: selectedFigure.skill,
                  x: tile.x,
                  y: tile.y,
                  figure: selectedFigure.figure,
                }
              : card
          )
        );
        dispatch(setFigureToDelete(selectedFigure));

        setSelectedFigure(0);
      }
    }
  };

  useEffect(() => {
    if (deleteBoard) {
      setBoard(emptyBoard);
    }
  }, [deleteBoard]);

  useEffect(() => {
    if (contextMenuDelete.x !== -1 && contextMenuDelete.y !== -1) {
      setBoard(
        board.map((el) =>
          el.x === contextMenuDelete.x && el.y === contextMenuDelete.y
            ? { ...el, wasSelected: false }
            : el
        )
      );
    }

    //ONE CARD DELETION - WORK IN PROGRESS
    /* console.log(figToDel);
    dispatch(
      setCardsCollection(
        cardsCollection.map((e) =>
          e.id === figToDel.id
            ? {
                ...e,
                count: figToDel.count,
              }
            : e
        )
      )
    );*/
  }, [contextMenuDelete]);

  let readyLineup = board.filter(
    (v) => v.tile === "player1" && v.wasSelected === true
  );
  useEffect(() => {
    //Ha a player1 minden mezőre lerakta a bábúkat akk elkezdődhet a játék
    if (readyLineup.length === 12) {
      dispatch(setActiveBtn(true));
      dispatch(setLineup(board));
    } else {
      dispatch(setActiveBtn(false));
    }
  }, [readyLineup]);

  return board.map((e) => (
    <Tiles
      boardTile={e}
      key={e.id}
      onClick={(param) => handleBoardClick(e, param)}
      setContextMenuDelete={(cm) => setContextMenuDelete(cm)}
      selectedFigure={selectedFigure}
      cardsCollection={cardsCollection}
    />
  ));
}
