import { cards } from "../../domain/cards.js";

import {
  SET_ACTIVE_BTN,
  SET_CARD_COLLECTION,
  FIGURE_TO_DELETE,
} from "./actions.js";

const activeBtnInitialState = false;
export const activeBtnReducer = (state = activeBtnInitialState, action) => {
  const { type, payload } = action;

  if (type === SET_ACTIVE_BTN) {
    return payload;
  }

  return state;
};

const cardsCollectionInitalState = cards;
export const cardsCollectionReducer = (
  state = cardsCollectionInitalState,
  action
) => {
  const { type, payload } = action;

  if (type === SET_CARD_COLLECTION) {
    return payload;
  }

  return state;
};

const figureToDeleteInitalState = [];
export const figureToDeleteReducer = (
  state = figureToDeleteInitalState,
  action
) => {
  const { type, payload } = action;

  if (type === FIGURE_TO_DELETE) {
    return payload;
  }

  return state;
};
