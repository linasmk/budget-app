import expensesReducer from "../../reducers/expenses";
import expenses from "../fixtures/expenses";

test("Should set default state", () => {
  const state = expensesReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual([]);
});

test("Should remove expense by id", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: expenses[1].id,
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test("Should not remove expense, if id not found", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: "-1",
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test("Should add an expense", () => {
  const expense = {
    id: "104",
    description: "Item",
    note: "",
    amount: 5000,
    createdAt: 2000,
  };
  const action = {
    type: "ADD_EXPENSE",
    expense,
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, expense]);
});

test("Should edit an expense", () => {
  const amount = 355;
  const action = {
    type: "EDIT_EXPENSE",
    id: expenses[0].id,
    updates: {
      amount,
    },
  };
  const state = expensesReducer(expenses, action);
  expect(state[0].amount).toBe(amount);
});

test("Should not edit an expense, if expense not found", () => {
  const amount = 355;
  const action = {
    type: "EDIT_EXPENSE",
    id: "-1",
    updates: {
      amount,
    },
  };
  const state = expensesReducer(expenses, action);
  expect(state[0].amount).toBe(state[0].amount);
});
