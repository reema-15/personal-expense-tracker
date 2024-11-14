// context provider for managing global state
import React, { createContext, useContext, useReducer, useEffect } from "react";
import { getExpenses, saveExpenses } from "../utils/localStorage";

//context to manage expenses
const ExpenseContext = createContext();

// reducer function to handle state changes based on the actions
const expenseReducer = (state, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      //add nex expense with a unique ID
      return [...state, { ...action.payload, id: Date.now() }];
    case "EDIT_EXPENSE":
      //edit an existing expense using its unique ID
      return state.map((expense) =>
        expense.id === action.payload.id ? action.payload : expense
      );
    case "DELETE_EXPENSE":
      // delete an expense with its ID
      return state.filter((expense) => expense.id !== action.payload);
    case "SET_EXPENSES":
      //set initial expenses from the payload
      return action.payload;
    default:
      //return to current state if no action is matched
      return state;
  }
};

// provider component for managing and providing expenses context
export const ExpenseProvider = ({ children }) => {
  //useReducer to manage expenses state with an initial load from the local storage
  const [expenses, dispatch] = useReducer(expenseReducer, [], () =>
    getExpenses()
  );

  //save expenses to local storage whenever they change
  useEffect(() => {
    saveExpenses(expenses);
  }, [expenses]);

  return (
    <ExpenseContext.Provider value={{ expenses, dispatch }}>
      {children}
    </ExpenseContext.Provider>
  );
};

export const useExpenses = () => useContext(ExpenseContext);
