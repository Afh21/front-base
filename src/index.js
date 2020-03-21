import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";
import * as serviceWorker from "./serviceWorker";
import "./styles/global.scss";

import "antd/dist/antd.css";

ReactDOM.render(<App />, document.getElementById("root"));

// PWA Functionality
serviceWorker.unregister();
