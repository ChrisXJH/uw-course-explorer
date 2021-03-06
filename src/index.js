import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import configureStore from "./config/configureStore";
import configAxios from "./config/configAxios";
import InitializationProvider from "./providers/InitializationProvider";
import NotificationsProvider from "./providers/NotificationsProvider";
import { CssBaseline } from "@material-ui/core";
import * as serviceWorker from "./serviceWorker";
import "./index.css";

const store = configureStore();
configAxios(store);

ReactDOM.render(
  <Provider store={store}>
    <CssBaseline />
    <InitializationProvider>
      <NotificationsProvider>
        <App />
      </NotificationsProvider>
    </InitializationProvider>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
