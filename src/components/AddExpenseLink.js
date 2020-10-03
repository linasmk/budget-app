/* ========= Dependencies ============= */
import React from "react";
import { NavLink } from "react-router-dom";
/* ========== Code ========== */
export const AddExpenseLink = () => {
  return (
    <NavLink
      to="/create"
      className="add-expense-link"
      activeClassName="is-active-navlink"
    >
      Add Expense
    </NavLink>
  );
};
export default AddExpenseLink;
