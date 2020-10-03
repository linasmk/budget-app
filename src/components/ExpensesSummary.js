/* ========= App Dependencies ============= */
import React from "react";
import numeral from "numeral";
import { connect } from "react-redux";
/* ========== Redux ========== */
import getVisibleExpenses from "../selectors/expenses";
import selectExpensesTotal from "../selectors/expenses-total";

/* ========== Components ========== */
/* ========= Code ============= */
export const ExpensesSummary = ({ expenseCount, expenseTotal }) => {
  const expenseCountSpelling = expenseCount === 1 ? "expense" : "expenses";
  return (
    <div className="expense-summary">
      <div className="expense-summary__tile">
        <p className="expense-summary__description">Expenses visible:</p>
        <p className="expense-summary__output">{expenseCount}</p>
      </div>
      <div className="expense-summary__tile">
        <p className="expense-summary__description">Totalling to:</p>
        <p className="expense-summary__output">
          {"€" + numeral(expenseTotal / 100).format("0,0.00")}
        </p>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  return {
    expenseCount: visibleExpenses.length,
    expenseTotal: selectExpensesTotal(visibleExpenses),
  };
};

export default connect(mapStateToProps)(ExpensesSummary);
