import moment from "moment";
import {
  setTextFilter,
  sortByDate,
  sortByAmount,
  setStartDate,
  setEndDate,
} from "../../actions/filters";

// Generate startDate
test("Should generate set start date action object", () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: "SET_START_DATE",
    startDate: moment(0),
  });
});

// Generate endDate
test("Should generate setEndDate action object", () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: "SET_END_DATE",
    endDate: moment(0),
  });
});

// Generate setTextFilter with provided values
test("Should generate set text filter action object with text values", () => {
  const text = "Text string";
  const action = setTextFilter(text);
  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    text,
  });
});

// Generate setTextFilter without provided values
test("Should generate set text filter action object without text values", () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    text: "",
  });
});

// Generate sortByDate
test("Should generate sortByDate filter action object", () => {
  expect(sortByDate()).toEqual({ type: "SORT_BY_DATE" });
});

// Generate sortByAmount
test("Should generate sortByAmount filter action object", () => {
  expect(sortByAmount()).toEqual({ type: "SORT_BY_AMOUNT" });
});
