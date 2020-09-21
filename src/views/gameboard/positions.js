import bomb from "../../assets/icons/bomb.png";
import flag from "../../assets/icons/flag.png";

export function checkForValidPosition(x, y, select, currentFigure, tile) {
  if (select) {
    if (currentFigure.title !== "Felderítő") {
      if (
        (x === currentFigure.x - 1 && y === currentFigure.y) ||
        (x === currentFigure.x + 1 && y === currentFigure.y)
      ) {
        if (tile !== currentFigure.tile) {
          return true;
        }
      }
      if (
        (y === currentFigure.y - 1 && x === currentFigure.x) ||
        (y === currentFigure.y + 1 && x === currentFigure.x)
      ) {
        if (tile !== currentFigure.tile) {
          return true;
        }
      }
    } else {
      if (
        (x === currentFigure.x && y !== currentFigure.y) ||
        (y === currentFigure.y && x !== currentFigure.x)
      ) {
        if (tile !== currentFigure.tile) {
          return true;
        }
      }
    }
    if (y === currentFigure.y && x === currentFigure.x) {
      //console.log("SAJÁT BÁBÚ");
      return true;
    }
  }
}

export function dontAllowPlayer2(piece, currentPlayer) {
  if (currentPlayer === "p1") {
    if (piece.tile === "player2") {
      console.log("Player2 re nem kattinthatsz");
      return true;
    }
  }
}
export function dontAllowPlayer1(piece, currentPlayer) {
  if (currentPlayer === "p2") {
    if (piece.tile === "player1") {
      console.log("Player1 re nem kattinthatsz");
      return true;
    }
  }
}
export function checkForBombSelected(piece) {
  if (piece.icon === bomb || piece.icon === flag) {
    console.log("BOMBA VAGY ZÁSZLÓ");
    return true;
  }
}

export function checkForWin(piece, currentPlayer) {
  if (currentPlayer === "p1") {
    if (piece.tile === "player2" && piece.title === "Zászló") {
      return true;
    } else {
      return false;
    }
  }
  if (currentPlayer === "p2") {
    if (piece.tile === "player1" && piece.title === "Zászló") {
      return true;
    } else {
      return false;
    }
  }
}
