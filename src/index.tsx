import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { DAppProvider, Config } from "@usedapp/core";
import "./index.css";

const config: Config = {};

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <DAppProvider config={config}>
                <App />
            </DAppProvider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
);
