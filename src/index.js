import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import 'antd/dist/antd.css';

import { Provider } from "react-redux";
import store from './redux/store';

import App from "./App";

ReactDOM.render(
  <Router basename="/crypto-app">
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById("root")
);
