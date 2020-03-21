import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";
import * as serviceWorker from "./serviceWorker";
import "./styles/global.scss";
import "antd/dist/antd.css";

import { Provider } from "react-redux";
import { store } from "./redux/store";

ReactDOM.render(
   <Provider store={store}>
      <App />
   </Provider>,
   document.getElementById("root")
);

// PWA Functionality
serviceWorker.unregister();
