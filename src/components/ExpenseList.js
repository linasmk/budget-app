import React from "react";
import { connect } from "react-redux";
/* ========== Redux ========== */
import getVisibleExpenses from "../selectors/expenses";
/* ========== Components ========== */
import ExpenseListItem from "./ExpenseListItem";

/* ========== Code ========== */

const ExpenseList = (props) => (
  <div>
    <h1>Expense List</h1>
    {props.expenses.map((expense) => {
      return <ExpenseListItem key={expense.id} {...expense} />;
    })}
  </div>
);

const mapStateToProps = (state) => {
  return {
    expenses: getVisibleExpenses(state.expenses, state.filters),
  };
};

export default connect(mapStateToProps)(ExpenseList);
