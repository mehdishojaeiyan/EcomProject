import React from "react";
import  ReactDOM  from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import App from "./app";
import {BrowserRouter} from "react-router-dom"
import "animate.css";
ReactDOM.render(

<BrowserRouter>
                <App/>
       
</BrowserRouter> , document.getElementById('root'));
