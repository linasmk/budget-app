/* ========= App Dependencies ============= */
import React from "react";
import { shallow } from "enzyme";
/* ========== Components ========== */
import expenses from "../fixtures/expenses";
import { ExpensesSummary } from "../../components/ExpensesSummary";

it("renders ExpenseSummary correctly with 1 expense", () => {
  const wrapper = shallow(
    <ExpensesSummary expenseCount={1} expenseTotal={300} />
  );
  expect(wrapper).toMatchSnapshot();
});

it("renders ExpenseSummary correctly with multiple expenses", () => {
  const wrapper = shallow(
    <ExpensesSummary expenseCount={5} expenseTotal={800} />
  );
  expect(wrapper).toMatchSnapshot();
});
