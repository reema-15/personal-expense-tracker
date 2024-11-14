// fetch the expenses from the local stoarge and parse them into an array
export const getExpenses = () => {
  const expenses = localStorage.getItem("expenses");
  return expenses ? JSON.parse(expenses) : []; // return parsed array or empty aray if found none
};

// save the current list of expenses to local storage as a stringified JSON object
export const saveExpenses = (expenses) => {
  localStorage.setItem("expenses", JSON.stringify(expenses));
};
