import React from "react";
import ReactDom from "react-dom";
import 'antd/dist/antd.css'
import { App } from "./App";
import {BrowserRouter} from "react-router-dom";
import './i18n'

ReactDom.render(
    <BrowserRouter><App /></BrowserRouter>,
    document.getElementById("root"));
