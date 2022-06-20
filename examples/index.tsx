import ReactDom from "react-dom";
import React from "react";
import App from "./app";
import "./global.less";
import "@components/index.css";

ReactDom.render(<App />, document.getElementById("root"));
