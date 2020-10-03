import React from "react";
import { connect } from "react-redux";
/* ========== Redux ========== */
import getVisibleExpenses from "../selectors/expenses";
/* ========== Components ========== */
import ExpenseListItem from "./ExpenseListItem";

/* ========== Code ========== */

export const ExpenseList = (props) => (
  <section className="expense-list">
    <div className="expense-list__topbar">
      <p className="topbar__item-name">Expense</p>
      <p className="topbar__item-name">Amount</p>
    </div>
    {props.expenses.length === 0 ? (
      <h3 className="expense-list__no-expenses">
        You currently have no expenses!
      </h3>
    ) : (
      props.expenses.map((expense) => {
        return <ExpenseListItem key={expense.id} {...expense} />;
      })
    )}
  </section>
);

const mapStateToProps = (state) => {
  return {
    expenses: getVisibleExpenses(state.expenses, state.filters),
  };
};

export default connect(mapStateToProps)(ExpenseList);
