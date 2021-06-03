import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import myReducer from "./reducers/index";
import { Provider } from "react-redux";

import App from "./App";
const store = createStore(myReducer);
const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  rootElement
);
