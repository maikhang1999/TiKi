import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import store from "./reducers/store";
import { Provider } from "react-redux";

import App from "./App";
const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  rootElement
);
