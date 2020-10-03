/* ========= App Dependencies ============= */
import React from "react";
import { shallow } from "enzyme";
/* ========== Components ========== */
import { AddExpenseButton } from "../../components/AddExpenseButton";
/* ========== Code ========== */
it("renders AddExpenseButton correctly", () => {
  const wrapper = shallow(<AddExpenseButton />);
  expect(wrapper).toMatchSnapshot();
});
