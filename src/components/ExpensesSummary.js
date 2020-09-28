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
    <div>
      <p>
        {expenseCount} {expenseCountSpelling} visible given by your search.
      </p>
      <p>Totalling {"€" + numeral(expenseTotal / 100).format("0,0.00")} .</p>
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
