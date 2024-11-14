// page for adding new expense
import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Typography } from "@mui/material";
import ExpenseForm from "../components/ExpenseForm";
import { useExpenses } from "../contexts/ExpenseContext";

const AddExpense = () => {
  const navigate = useNavigate();
  const { dispatch } = useExpenses();

  const handleSubmit = (expense) => {
    dispatch({ type: "ADD_EXPENSE", payload: expense });
    navigate("/");
  };

  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom>
        Add New Expense
      </Typography>
      <ExpenseForm onSubmit={handleSubmit} />
    </Container>
  );
};

export default AddExpense;
