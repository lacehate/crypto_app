import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { HashRouter } from "react-router-dom";
import { DAppProvider, Config } from "@usedapp/core";
import "./index.css";
import store from "./store";
import { Provider } from "react-redux";

const config: Config = {};

ReactDOM.render(
    <React.StrictMode>
        <HashRouter>
            <DAppProvider config={config}>
                <Provider store={store}>
                    <App />
                </Provider>
            </DAppProvider>
        </HashRouter>
    </React.StrictMode>,
    document.getElementById("root")
);
