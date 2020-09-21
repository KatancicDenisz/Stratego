export const SET_CURRENT_PLAYER = "SET_CURRENT_PLAYER";
export const SET_LINEUP = "SET_LINEUP";
export const SET_CURRENT_FIGURE = "SET_CURRENT_FIGURE";
export const SET_KILLED_FIGURE = "SET_KILLED_FIGURE";
export const SET_KILLED_FIGURE2 = "SET_KILLED_FIGURE2";
//export const MOVE_PLAYER_TO_EMPTY_TILE = "MOVE_PLAYER_TO_EMPTY_TILE";

export const setCurrentPlayer = (player) => ({
  type: SET_CURRENT_PLAYER,
  payload: player,
});

export const setLineup = (lineup) => ({
  type: SET_LINEUP,
  payload: lineup,
});

export const setCurrentFigure = (figure) => ({
  type: SET_CURRENT_FIGURE,
  payload: figure,
});

export const setKilledFigure = (figure) => ({
  type: SET_KILLED_FIGURE,
  payload: figure,
});

export const setKilledFigure2 = (figure) => ({
  type: SET_KILLED_FIGURE2,
  payload: figure,
});

/*export const playerToEmptyTile = (arr, currentFigure, piece) => ({
  type: MOVE_PLAYER_TO_EMPTY_TILE,
  payload: currentFigure,
});*/
