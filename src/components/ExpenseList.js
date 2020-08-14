import React from "react";
import { connect } from "react-redux";
/* ========== Redux ========== */
import getVisibleExpenses from "../selectors/expenses";
/* ========== Components ========== */
import ExpenseListItem from "./ExpenseListItem";

/* ========== Code ========== */

export const ExpenseList = (props) => (
  <div>
    {props.expenses.length === 0 ? (
      <h3>You currently have no expenses!</h3>
    ) : (
      props.expenses.map((expense) => {
        return <ExpenseListItem key={expense.id} {...expense} />;
      })
    )}
  </div>
);

const mapStateToProps = (state) => {
  return {
    expenses: getVisibleExpenses(state.expenses, state.filters),
  };
};

export default connect(mapStateToProps)(ExpenseList);
