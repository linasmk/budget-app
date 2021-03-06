/* ===== App Dependencies ===== */
import React from "react";
import { shallow } from "enzyme";
import moment from "moment";
import { DateRangePicker } from "react-dates";
import { filters, altFilters } from "../fixtures/filters";
/* ========== Components ========== */

import { ExpenseListFilters } from "../../components/ExpenseListFilters";

/* ========== Code ========== */
let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
  setTextFilter = jest.fn();
  sortByDate = jest.fn();
  sortByAmount = jest.fn();
  setStartDate = jest.fn();
  setEndDate = jest.fn();
  wrapper = shallow(
    <ExpenseListFilters
      filters={filters}
      setTextFilter={setTextFilter}
      sortByDate={sortByDate}
      sortByAmount={sortByAmount}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
    />
  );
});

test("should render ExpenseListFilters correctly", () => {
  expect(wrapper).toMatchSnapshot();
});

test("should render ExpenseListFilters with alternative data correctly", () => {
  wrapper.setProps({
    filters: altFilters,
  });
  expect(wrapper).toMatchSnapshot();
});

test("should handle text change", () => {
  const value = "Ice cream";
  wrapper.find("input").at(0).simulate("change", {
    target: { value },
  });
  expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

test("should sort by date", () => {
  const value = "date";
  wrapper.setProps({
    filters: altFilters,
  });
  wrapper.find("select").simulate("change", {
    target: { value },
  });
  expect(sortByDate).toHaveBeenCalled();
});

test("should sortByAmount", () => {
  const value = "amount";

  wrapper.find("select").simulate("change", {
    target: { value },
  });
  expect(sortByAmount).toHaveBeenCalled();
});

test("should handle date changes", () => {
  const startDate = moment(0).add(1, "years");
  const endDate = moment(0).add(3, "years");
  wrapper.find(DateRangePicker).prop("onDatesChange")({ startDate, endDate });
  expect(setStartDate).toHaveBeenLastCalledWith(startDate);
  expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

test("should handle date focus changes", () => {
  const calendarFocused = "endDate";
  wrapper.find(DateRangePicker).prop("onFocusChange")(calendarFocused);
  expect(wrapper.state("calendarFocused")).toBe(calendarFocused);
});
