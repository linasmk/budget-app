/* ========= App Dependencies ============= */
import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import numeral from "numeral";

/* ========= Code ============= */

const ExpenseListItem = ({ id, description, note, amount, createdAt }) => (
  <div className="expens-item">
    <h3 className="expense-item__description">
      <Link className="expens-item__link" to={`/edit/${id}`}>
        {description}
      </Link>
    </h3>
    <p className="expense-item__date">
      {moment(createdAt).format("MMMM Do, YYYY. [At:] LT")}
    </p>
    <p className="expense-item__amount">
      {"€" + numeral(amount / 100).format("0,0.00")}
    </p>
    <p className="expense-item__note">{note}</p>
  </div>
);

export default ExpenseListItem;
