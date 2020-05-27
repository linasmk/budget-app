import React from "react";
import { connect } from "react-redux";
import { removeExpense } from "../actions/expenses";
import { cl } from "../utils/DebugHelpers";

const ExpenseListItem = ({ dispatch, id, description, amount, createdAt }) => (
  <section>
    <h3>{description}</h3>
    <p>
      {amount} - {createdAt}
    </p>
    <button
      onClick={() => {
        dispatch(removeExpense({ id }));
      }}
    >
      Remove
    </button>
  </section>
);

// const mapStateToProps = (state) => {
//   return {
//     expenses: state.expenses,
//   };
// };

export default connect()(ExpenseListItem);
