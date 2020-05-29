import React from "react";

import { Link } from "react-router-dom";
import { cl } from "../utils/DebugHelpers";

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
  <section>
    <h3>
      <Link to={`/edit/${id}`}>{description}</Link>
    </h3>
    <p>
      {amount} - {createdAt}
    </p>
  </section>
);

// const mapStateToProps = (state) => {
//   return {
//     expenses: state.expenses,
//   };
// };

export default ExpenseListItem;
