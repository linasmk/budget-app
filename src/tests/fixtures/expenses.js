import moment from "moment";
export default [
  {
    id: "1",
    description: "Ice cream",
    note: "",
    amount: 255,
    createdAt: 0,
  },
  {
    id: "2",
    description: "Diner",
    note: "",
    amount: 3255,
    createdAt: moment(0).subtract(4, "days").valueOf(),
  },

  {
    id: "3",
    description: "Vacation",
    note: "",
    amount: 5500000,
    createdAt: moment(0).add(4, "days").valueOf(),
  },
];
