import React from "react";
import { Mainpage } from "./mainpage/MainPage";
import { Gameroom } from "./gameroom/GameRoom";
import { Preparingroom } from "./preparingroom/PreparingRoom";
import { Waitingroom } from "./waitingroom/WaitingRoom";
import { useState } from "react";

export function App() {
  const [createGameClicked, setCreateGameClicked] = useState(false);
  const [connectToRoom, setConnectToRoom] = useState(false);
  const [readyClicked, setReadyClicked] = useState(false);
  const [goToMainPage, setGoToMainPage] = useState(true);

  if (goToMainPage) {
    return (
      <Mainpage
        handleCreateGameclick={setCreateGameClicked}
        handleRoomCreateClick={setConnectToRoom}
        handleGoToMainpage={setGoToMainPage}
      />
    );
  } else if (createGameClicked) {
    return (
      <Waitingroom
        handleGoToMainpage={setGoToMainPage}
        handleCreateGameclick={setCreateGameClicked}
      />
    );
  } else if (connectToRoom) {
    return (
      <Preparingroom
        handleReadyClick={setReadyClicked}
        handleGoToMainpage={setGoToMainPage}
        handleRoomCreateClick={setConnectToRoom}
        handleCreateGameclick={setCreateGameClicked}
      />
    );
  } else if (readyClicked) {
    return (
      <Gameroom
        handleGoToMainpage={setGoToMainPage}
        handleReadyClick={setReadyClicked}
      />
    );
  }
}
