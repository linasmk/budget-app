/* ========= App Dependencies ============= */
import React from "react";
import { shallow } from "enzyme";
/* ========== Components ========== */
import { AddExpenseLink } from "../../components/AddExpenseLink";
/* ========== Code ========== */
it("renders AddExpenseLink correctly", () => {
  const wrapper = shallow(<AddExpenseLink />);
  expect(wrapper).toMatchSnapshot();
});
