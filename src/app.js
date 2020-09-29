/* ===== App Dependencies ===== */
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import store from "./store/configureStore";
import getVisibleExpenses from "./selectors/expenses";
import { addExpense, removeExpense, editExpense } from "./actions/expenses";
import {
  setTextFilter,
  sortByDate,
  sortByAmount,
  setStartDate,
  setEndDate,
} from "./actions/filters";
import { cl } from "./utils/DebugHelpers";
/* ===== Styles and Components ===== */
import "normalize.css/normalize.css";
import "react-dates/lib/css/_datepicker.css";
import "react-dates/initialize";
import "./styles/styles.scss";

/* ===== Code ====== */
const appRoot = document.querySelector("#app");
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, appRoot);
