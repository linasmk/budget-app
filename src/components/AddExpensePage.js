import React from "react";
import { connect } from "react-redux";
import { addExpense } from "../actions/expenses";
import ExpenseForm from "./ExpenseForm";
import { cl } from "../utils/DebugHelpers";

const AddExpensePage = (props) => (
  <article>
    <h1>Add Expense</h1>
    <ExpenseForm
      onSubmit={(expense) => {
        props.dispatch(addExpense(expense));
        props.history.push("/");
      }}
    />
  </article>
);
export default connect()(AddExpensePage);
