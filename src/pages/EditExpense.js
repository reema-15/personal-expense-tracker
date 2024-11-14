// page for editing exisiting expense
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Typography } from "@mui/material";
import ExpenseForm from "../components/ExpenseForm";
import { useExpenses } from "../contexts/ExpenseContext";

const EditExpense = () => {
  const { id } = useParams(); // get ID from URL
  const navigate = useNavigate();
  const { expenses, dispatch } = useExpenses();

  // fetch the expense with its ID
  const expense = expenses.find((e) => e.id === Number(id)); // get expenses and dispatch function

  // Error handling when ID not found
  if (!expense) {
    return <Typography>Expense not found</Typography>;
  }

  //handle form submission for updating the expense
  const handleSubmit = (updatedExpense) => {
    dispatch({
      type: "EDIT_EXPENSE",
      payload: { ...updatedExpense, id: expense.id },
    });
    navigate("/"); // navigate back to home after the update
  };

  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom>
        Edit Expense
      </Typography>
      <ExpenseForm onSubmit={handleSubmit} initialValues={expense} />
    </Container>
  );
};

export default EditExpense;
