/* ========= Dependencies ============= */
import React from "react";
import { connect } from "react-redux";
import { DateRangePicker } from "react-dates";
import selectExpenses from "../selectors/expenses";
import {
  setTextFilter,
  sortByDate,
  sortByAmount,
  setStartDate,
  setEndDate,
} from "../actions/filters";

/* ========== Code ========== */
export class ExpenseListFilters extends React.Component {
  state = {
    calendarFocused: null,
  };
  onDatesChange = ({ startDate, endDate }) => {
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
  };
  onFocusChange = (calendarFocused) => {
    this.setState(() => ({
      calendarFocused,
    }));
  };
  onTextChange = (e) => {
    this.props.setTextFilter(e.target.value);
  };
  onSortChange = (e) => {
    if (e.target.value === "date") {
      this.props.sortByDate();
    } else if (e.target.value === "amount") {
      this.props.sortByAmount();
    }
  };

  render() {
    return (
      <div className="expense-filters">
        <div className="expense-filters__input-wrapper">
          <input
            type="text"
            value={this.props.filters.text}
            onChange={this.onTextChange}
            placeholder="Expense description"
            className="expense-filters__input--text h-input-styles"
          />
          <select
            value={this.props.filters.sortBy}
            onChange={this.onSortChange}
            className="expense-filters__input--select h-input-styles"
          >
            <option value="date">Date</option>
            <option value="amount">Amount</option>
          </select>
        </div>

        <DateRangePicker
          startDate={this.props.filters.startDate}
          endDate={this.props.filters.endDate}
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          startDateId={"dwjkhqkehwqjkeq"}
          endDateId={"cxzvcxbzbczxbz"}
          showClearDates={true}
          numberOfMonths={1}
          isOutsideRange={() => false}
          daySize={33}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    filters: state.filters,
  };
};
const mapDispatchToProps = (dispatch) => ({
  setTextFilter: (text) => dispatch(setTextFilter(text)),
  sortByDate: () => dispatch(sortByDate()),
  sortByAmount: () => dispatch(sortByAmount()),
  setStartDate: (startDate) => dispatch(setStartDate(startDate)),
  setEndDate: (endDate) => dispatch(setEndDate(endDate)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);
