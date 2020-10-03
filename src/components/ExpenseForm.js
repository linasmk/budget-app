/* ===== App Dependencies ===== */
import React from "react";
import moment from "moment";

import { SingleDatePicker } from "react-dates";

// -----------------------------------------
import { cl } from "../utils/DebugHelpers";
/* ========== Code ========== */

export default class ExpenseForm extends React.Component {
  state = {
    description: this.props.expense ? this.props.expense.description : "",
    note: this.props.expense ? this.props.expense.note : "",
    amount: this.props.expense
      ? (this.props.expense.amount / 100).toString()
      : "",
    createdAt: this.props.expense
      ? moment(this.props.expense.createdAt)
      : moment(),
    calenderFocused: false,
    error: "",
  };

  onDescriptionChange = (e) => {
    const description = e.target.value;

    this.setState(() => ({
      description,
    }));
  };
  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({
      note,
    }));
  };
  onAmountChange = (e) => {
    const amount = e.target.value;
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
  };
  onDateChange = (createdAt) => {
    if (createdAt) {
      this.setState(() => ({ createdAt }));
    }
  };
  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calenderFocused: focused }));
  };
  onSubmit = (e) => {
    e.preventDefault();
    if (!this.state.description || !this.state.amount) {
      this.setState(() => ({
        error: "Description and amount fields should not stay empty!",
      }));
    } else {
      this.setState(() => ({
        error: "",
      }));
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10) * 100,
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note,
      });
    }
  };

  render() {
    return (
      <section className="form-wrapper">
        {this.state.error && (
          <p className="expense__form-wrapper--warning">{this.state.error}</p>
        )}

        <form className="expense__form" onSubmit={this.onSubmit}>
          <div className="expense-form__input-wrapper">
            <input
              type="text"
              placeholder="Description"
              autoFocus
              value={this.state.description}
              onChange={this.onDescriptionChange}
              className="expense-form__input h-input-styles"
            />
            <input
              type="text"
              placeholder="Amount"
              value={this.state.amount}
              onChange={this.onAmountChange}
              className="expense-form__input h-input-styles"
            />
          </div>

          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calenderFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
            daySize={33}
          />
          <textarea
            placeholder="Add a note (optional)"
            value={this.state.note}
            onChange={this.onNoteChange}
            rows="5"
            className="expense-form__textarea h-input-styles"
          ></textarea>
          <button className="add-expense-btn">Add Expense</button>
        </form>
      </section>
    );
  }
}
