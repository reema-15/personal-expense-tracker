import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { TextField, Button, MenuItem } from "@mui/material";
import { styled } from "@mui/material/styles";

// Styled form container using Material-UI's styled API
const FormContainer = styled("form")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
  maxWidth: 400,
  margin: "0 auto",
}));

// predefined expense types for selection in the form
const expenseTypes = [
  "Food",
  "Transportation",
  "Housing",
  "Utilities",
  "Entertainment",
  "Other",
];

// ExpenseForm component for adding or editing expenses
const ExpenseForm = ({ onSubmit, initialValues = {} }) => {
  const formik = useFormik({
    initialValues: {
      description: "",
      amount: "",
      date: "",
      type: "",
      ...initialValues, // provide the initial values: for editing
    },
    validationSchema: Yup.object({
      description: Yup.string().required("Required"), // Required field validation for description
      amount: Yup.number().required("Required").positive("Must be positive"), // Positive number validation for amount
      date: Yup.date().required("Required"), // Required date validation
      type: Yup.string().required("Required").oneOf(expenseTypes), // Required type validation against predefined types
    }),
    onSubmit: (values) => {
      onSubmit(values);
    },
  });

  return (
    <FormContainer onSubmit={formik.handleSubmit}>
      {/* Handle form submission */}
      {/* Input fields with error handling and validation feedback */}
      <TextField
        fullWidth
        id="description"
        name="description"
        label="Description"
        value={formik.values.description}
        onChange={formik.handleChange}
        error={formik.touched.description && Boolean(formik.errors.description)}
        helperText={formik.touched.description && formik.errors.description}
      />
      <TextField
        fullWidth
        id="amount"
        name="amount"
        label="Amount"
        type="number"
        value={formik.values.amount}
        onChange={formik.handleChange}
        error={formik.touched.amount && Boolean(formik.errors.amount)}
        helperText={formik.touched.amount && formik.errors.amount}
      />
      <TextField
        fullWidth
        id="date"
        name="date"
        label="Date"
        type="date"
        value={formik.values.date}
        onChange={formik.handleChange}
        InputLabelProps={{ shrink: true }}
        error={formik.touched.date && Boolean(formik.errors.date)}
        helperText={formik.touched.date && formik.errors.date}
      />
      <TextField
        fullWidth
        id="type"
        name="type"
        select
        label="Type"
        value={formik.values.type}
        onChange={formik.handleChange}
        error={formik.touched.type && Boolean(formik.errors.type)}
        helperText={formik.touched.type && formik.errors.type}
      >
        {expenseTypes.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </TextField>
      <Button color="primary" variant="contained" fullWidth type="submit">
        Submit
      </Button>
    </FormContainer>
  );
};

export default ExpenseForm;
