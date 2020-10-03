/* ========= Dependencies ============= */
import React from "react";
/* ========== Components ========== */

import ExpenseList from "./ExpenseList";
import ExpenseListFilters from "./ExpenseListFilters";
import AddExpenseLink from "./AddExpenseLink";

/* ========== Code ========== */

const ExpenseDashboardPage = () => (
  <div className="expense-dashboard">
    <article className="expense-dashboard__content">
      <ExpenseListFilters />
      <AddExpenseLink />
      <ExpenseList />
    </article>
  </div>
);

export default ExpenseDashboardPage;
