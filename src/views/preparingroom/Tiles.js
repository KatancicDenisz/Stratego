import React from "react";
import cn from "classnames";
import lock from "../../assets/icons/lock.png";
import del from "../../assets/icons/delete.png";
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";
//import { setCardsCollection } from "../../state/preparingroom/actions.js";
//import { useDispatch, useSelector } from "react-redux";

export function Tiles({ onClick, boardTile }) {
  //const cardsCollection = useSelector((state) => state.cardsCollection);
  //const dispatch = useDispatch();
  const handleContextDelete = () => {
    console.log("delete");
  };

  return (
    <div
      className={cn(boardTile.tile, {
        allowedTile: boardTile.tile === "player1",
      })}
      onClick={onClick}
    >
      {boardTile.wasSelected ? (
        <div className="bg">
          <ContextMenuTrigger id={"" + boardTile.id}>
            <div className="contextMenuWrap">
              {boardTile.power === 0 ? (
                <img
                  className="icontWithContext"
                  src={boardTile.icon}
                  alt=""
                ></img>
              ) : (
                boardTile.power
              )}
            </div>
          </ContextMenuTrigger>
          <ContextMenu className="menu" id={"" + boardTile.id}>
            <MenuItem
              onClick={handleContextDelete}
              className="contextMenuDelete"
            >
              <img src={del} alt=""></img>
              Törlés
            </MenuItem>
          </ContextMenu>
        </div>
      ) : null}
      {boardTile.tile !== "player1" ? (
        <img className="notAllowedTile" src={lock} alt=""></img>
      ) : null}
    </div>
  );
}
