import { createStore, applyMiddleware, combineReducers } from "redux";
import { createLogger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  lineupReducer,
  currentPlayerReducer,
  currentFigureReducer,
  killedFigureReducer,
} from "./reducers.js";

import {
  activeBtnReducer,
  cardsCollectionReducer,
  figureToDeleteReducer,
} from "./preparingroom/reducers.js";

const rootReducer = combineReducers({
  currentPlayer: currentPlayerReducer,
  lineup: lineupReducer,
  currentFigure: currentFigureReducer,
  killedFigure: killedFigureReducer,
  activeBtn: activeBtnReducer,
  cardsCollection: cardsCollectionReducer,
  figToDel: figureToDeleteReducer,
});
const logger = createLogger({
  collapsed: true,
});

export const configureStore = () => {
  return createStore(rootReducer, composeWithDevTools(applyMiddleware(logger)));
};
