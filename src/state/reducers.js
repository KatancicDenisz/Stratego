import { player2lineup } from "../domain/lineup";
import {
  SET_CURRENT_PLAYER,
  SET_LINEUP,
  SET_CURRENT_FIGURE,
  SET_KILLED_FIGURE,
  SET_KILLED_FIGURE2,
} from "./actions.js";

const playerInitialState = "p1";
export const currentPlayerReducer = (state = playerInitialState, action) => {
  const { type, payload } = action;

  if (type === SET_CURRENT_PLAYER) {
    return payload;
  }

  return state;
};

const figureInitialState = 0;
export const currentFigureReducer = (state = figureInitialState, action) => {
  const { type, payload } = action;

  if (type === SET_CURRENT_FIGURE) {
    return payload;
  }

  return state;
};

const killedFigureInitialState = [];
export const killedFigureReducer = (
  state = killedFigureInitialState,
  action
) => {
  const { type, payload } = action;

  if (type === SET_KILLED_FIGURE) {
    return [...state, payload];
  }

  if (type === SET_KILLED_FIGURE2) {
    return [...state, { ...payload, wasTwoKilled: true }];
  }

  return state;
};

const lineupInitialState = player2lineup;
export const lineupReducer = (state = lineupInitialState, action) => {
  const { type, payload } = action;

  if (type === SET_LINEUP) {
    return payload;
  }

  /*if (type === MOVE_PLAYER_TO_EMPTY_TILE) {
    const lineups = state;
    const lineup = payload;
    const currentFigure = 2;
    const piece = lineup.piece;
    console.log(lineup);

    return lineups.map((el) =>
      currentFigure.id !== currentFigure.id
        ? el.id === currentFigure.id
          ? { ...el, tile: "empty", img: currentFigure.icon }
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
    );*/

  return state;
};
