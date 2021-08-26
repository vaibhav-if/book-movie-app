import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "typeface-roboto";
import registerServiceWorker from "./registerServiceWorker";
import Details from "./screens/details/Details";

ReactDOM.render(<Details />, document.getElementById("root"));
registerServiceWorker();
