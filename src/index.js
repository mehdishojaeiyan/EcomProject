import React from "react";
import  ReactDOM  from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import App from "./app";
import {BrowserRouter} from "react-router-dom"
import "animate.css";
ReactDOM.render(
<React.StrictMode>
<BrowserRouter>
                <App/>
       
</BrowserRouter></React.StrictMode> , document.getElementById('root'));
