/* ===== App Dependencies ===== */
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
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
import { cl } from "./utils/DebugHelpers";
/* ===== Styles and Components ===== */
import "normalize.css/normalize.css";
import "react-dates/lib/css/_datepicker.css";
import "react-dates/initialize";
import "./styles/styles.scss";

/* ===== Code ====== */
const store = configureStore();

store.dispatch(
  addExpense({
    description: "Water Bill",
    amount: 5000,
  })
);
store.dispatch(
  addExpense({
    description: "Gas Bill",
    amount: 10000,
    createdAt: 100,
  })
);
store.dispatch(
  addExpense({
    description: "Rent",
    amount: 1095,
  })
);

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);
console.log(store.getState());

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));
