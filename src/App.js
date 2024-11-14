import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import { ExpenseProvider } from "./contexts/ExpenseContext";
import Home from "./pages/Home";
import AddExpense from "./pages/AddExpense";
import EditExpense from "./pages/EditExpense";

function App() {
  return (
    <ExpenseProvider>
      {" "}
      {/* Wrap application in context provider */}
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} /> {/* Route for home page */}
          <Route path="/add" element={<AddExpense />} />{" "}
          {/* Route for adding new expense */}
          <Route path="/edit/:id" element={<EditExpense />} />{" "}
          {/* Route for editing existing expense */}
        </Routes>
      </Router>
    </ExpenseProvider>
  );
}

export default App;
