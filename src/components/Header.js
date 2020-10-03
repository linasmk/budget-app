/* ===== App Dependencies ===== */
import React from "react";
import { NavLink } from "react-router-dom";
/* ========== Components ========== */
import ExpensesSummary from "./ExpensesSummary";

/* ========== Code ========== */
const Header = () => (
  <header className="header">
    <section className="header__content">
      <h1 className="header__title">
        <NavLink className="header__title" to="/" exact={true}>
          budgedo
        </NavLink>
      </h1>
      <ExpensesSummary />
    </section>
  </header>
);
export default Header;
