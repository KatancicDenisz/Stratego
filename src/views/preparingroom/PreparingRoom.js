import React from "react";
import "../../assets/css/preparingroom.css";
import { Card } from "./Card";
import { cards } from "../../domain/cards.js";
import { PrepareBoard } from "./PrepareBoard";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCardsCollection } from "../../state/preparingroom/actions.js";

export function Preparingroom({
  handleReadyClick,
  handleGoToMainpage,
  handleCreateGameclick,
  handleRoomCreateClick,
}) {
  const [selectedFigure, setSelectedFigure] = useState(0);
  const [deleteBoard, setDeleteBoard] = useState(false);
  const dispatch = useDispatch();

  const cardsCollection = useSelector((state) => state.cardsCollection);
  const activeBtn = useSelector((state) => state.activeBtn);

  const handleHandClick = (piece) => {
    if (piece.count <= 0) {
      return;
    }
    if (deleteBoard) {
      setDeleteBoard(false);
    }

    if (piece.id === selectedFigure.id) {
      setSelectedFigure(0);
    } else {
      setSelectedFigure(piece);
    }
  };

  const deleteBoardContent = () => {
    setDeleteBoard(true);
    dispatch(setCardsCollection(cards));
  };
  console.log("activebtn: " + activeBtn);
  console.log("delBoaard: " + deleteBoard);
  return (
    <div className="pushable">
      <div className="bgimagepreparingroom">
        <div className="ui container">
          <h1 className="prtitle">Készítsd el a felállásod!</h1>
          <div className="ui stackable two column grid">
            <div className="ui ten wide column">
              <div id="boardPreparingRoom">
                <PrepareBoard
                  boardSize={6}
                  selectedFigure={selectedFigure}
                  setSelectedFigure={(e) => setSelectedFigure(e)}
                  setDeleteBoard={(del) => setDeleteBoard(del)}
                  deleteBoard={deleteBoard}
                />
              </div>
            </div>
            <div className="ui six wide column middle aligned">
              <div className="ui center aligned segment">
                <div className="ui four cards">
                  {cardsCollection.map((card) =>
                    card.title !== "" ? (
                      <Card
                        key={card.id}
                        card={card}
                        onClick={(e) => handleHandClick(card)}
                        id={card.id}
                        selectedFigure={selectedFigure}
                      />
                    ) : null
                  )}
                </div>
              </div>
              <div className="centeredButtons">
                <button
                  className={
                    !deleteBoard && activeBtn
                      ? "ui primary centered medium  button ready"
                      : "ui primary centered medium button disabled  ready"
                  }
                  onClick={() => {
                    handleReadyClick(true);
                    handleGoToMainpage(false);
                    handleCreateGameclick(false);
                    handleRoomCreateClick(false);
                  }}
                >
                  Kész
                </button>
                <button
                  className="ui primary centered medium button delete"
                  onClick={() => deleteBoardContent()}
                >
                  Felállás törlése
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="copyright">
        Icons made by
        <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
          Freepik
        </a>
        ,
        <a href="https://www.flaticon.com/authors/eucalyp" title="Eucalyp">
          Eucalyp
        </a>
        ,
        <a
          href="https://www.flaticon.com/authors/smashicons"
          title="Smashicons"
        >
          Smashicons
        </a>
        from
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </div>
    </div>
  );
}
