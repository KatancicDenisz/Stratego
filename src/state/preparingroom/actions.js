export const SET_ACTIVE_BTN = "SET_ACTIVE_BTN";
export const SET_CARD_COLLECTION = "SET_CARD_COLLECTION";
export const FIGURE_TO_DELETE = "FIGURE_TO_DELETE";

export const setActiveBtn = (boolvalue) => ({
  type: SET_ACTIVE_BTN,
  payload: boolvalue,
});

export const setCardsCollection = (collection) => ({
  type: SET_CARD_COLLECTION,
  payload: collection,
});

export const setFigureToDelete = (fig) => ({
  type: FIGURE_TO_DELETE,
  payload: fig,
});
