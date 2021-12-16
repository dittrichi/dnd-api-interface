import React from "react";
import ReactDOM from "react-dom";

import Providers from "./providers";
import {GlobalStyle} from './components/globalStyle';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle/>
    <Providers />
  </React.StrictMode>,
  document.getElementById("root")
);
