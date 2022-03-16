import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react";
import { createStore } from "redux";

import App from "./component/App";
import reducers from "./reducers";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />, document.querySelector("#root")
  </Provider>
);
