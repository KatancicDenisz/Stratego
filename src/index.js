import React from "react";
import ReactDOM from "react-dom";
import { App } from "./views/App";
import "fomantic-ui-css/semantic.css";
import { configureStore } from "./state/store";
import { Provider } from "react-redux";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
