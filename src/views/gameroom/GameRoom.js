import React from "react";
import { useState } from "react";
import { Modal } from "semantic-ui-react";
import player1 from "../../assets/icons/player1.png";
import player2 from "../../assets/icons/player2.png";
import win from "../../assets/icons/winlogo.png";
import "../../assets/css/gameroom.css";
import { Gameboard } from "../gameboard/GameBoard";
import { Playerimage } from "./PlayerImage";
import { useSelector } from "react-redux";
import { DeadCard } from "./DeadCard.js";
import { CurrentFigureDesc } from "./CurrentFigureDesc";

export function Gameroom({ handleReadyClick, handleGoToMainpage }) {
  const lineup = useSelector((state) => state.lineup);
  const currentPlayer = useSelector((state) => state.currentPlayer);
  const currentFigure = useSelector((state) => state.currentFigure);
  const [open, setOpen] = useState(false);

  window.setTimeout(() => {
    if (open) handleGoToMainpage(true);
  }, 3000);

  return (
    <div className="container bgimage">
      <div className="volume">
        <i className="volume up icon big volumeicon"> </i>
        <i className="volume off icon volumeicon big"> </i>
      </div>
      <div className="ui three column grid">
        <div className="ui four wide column">
          <Playerimage
            title={"Player 1"}
            id={"player1icon"}
            icon={player1}
            currentPlayer={currentPlayer}
          />
          <h2>Levett bábúk</h2>

          <div className="ui center aligned segment deadCardCollection">
            <div className="ui two centered cards">
              {lineup.map((e) =>
                e.tile === "player1" ? (
                  <DeadCard deadcard={e} key={e.id} />
                ) : null
              )}
            </div>
          </div>
        </div>
        <div className="ui eight wide column">
          <div className="divtopmargin">
            <div className="ui items">
              <CurrentFigureDesc currfig={currentFigure} />
            </div>
          </div>
          <Modal open={open} className="ui modal">
            <div className="image content">
              <img className="image modalimage" src={win} alt=""></img>
              <div className="description">
                <p></p>
              </div>
            </div>
          </Modal>
          <Gameboard open={open} setOpen={(o) => setOpen(o)} />
          <button
            className="ui button primary big gamebtn"
            onClick={() => {
              handleReadyClick(false);
              handleGoToMainpage(true);
            }}
          >
            Vissza a főoldalra
          </button>
        </div>
        <div className="ui four wide column">
          <Playerimage
            title={"Player 2"}
            id={"player2icon"}
            icon={player2}
            currentPlayer={currentPlayer}
          />
          <h2>Levett bábúk</h2>

          <div className="ui center aligned segment deadCardCollection">
            <div className="ui two centered cards">
              {lineup.map((e) =>
                e.tile === "player2" ? (
                  <DeadCard deadcard={e} key={e.id} />
                ) : null
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
