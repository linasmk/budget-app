/* ===== App Dependencies ===== */
import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import getVisibleExpenses from "./selectors/expenses";
import { addExpense, removeExpense, editExpense } from "./actions/expenses";
import {
  setTextFilter,
  sortByDate,
  sortByAmount,
  setStartDate,
  setEndDate,
} from "./actions/filters";

/* ===== Styles and Components ===== */
import "normalize.css/normalize.css";
import "./styles/styles.scss";

/* ===== Code for the App ====== */
const store = configureStore();

store.dispatch(
  addExpense({
    description: "Water Bill",
    amount: 5000,
    createdAt: 10000,
  })
);
store.dispatch(
  addExpense({
    description: "Gas Bill",
    amount: 10000,
    createdAt: 15000,
  })
);
store.dispatch(setTextFilter("gas"));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);
console.log(store.getState());

ReactDOM.render(<AppRouter />, document.getElementById("app"));
