import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { SampleProvider } from "./Context/Context";
ReactDOM.render(
  <SampleProvider>
    <App />
  </SampleProvider>,
  document.getElementById("target")
);
