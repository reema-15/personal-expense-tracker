import React, { useState } from "react";
import {
  Typography,
  Paper,
  Box,
  Grid,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import CategoryIcon from "./CategoryIcon";
import { motion } from "framer-motion";

ChartJS.register(ArcElement, Tooltip, Legend);

// Styled container for expense summary section using Material-UI's styled API.
const SummaryContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  marginBottom: theme.spacing(3),
}));

// Component to display a summary of expenses with charts and total amounts.
const ExpenseSummary = ({ expenses }) => {
  const [viewMode, setViewMode] = useState("type"); // state to toggle between view modes (by type or month)

  const totalExpenses = expenses.reduce(
    // calculate total expenses
    (sum, expense) => sum + Number(expense.amount),
    0
  );

  // Calculate expenses by type
  const expensesByType = expenses.reduce((acc, expense) => {
    acc[expense.type] = (acc[expense.type] || 0) + Number(expense.amount);
    return acc;
  }, {});

  // Calculate expenses by month
  const expensesByMonth = expenses.reduce((acc, expense) => {
    const month = new Date(expense.date).toLocaleString("default", {
      month: "long",
    });
    acc[month] = (acc[month] || 0) + Number(expense.amount);
    return acc;
  }, {});

  // Determine chart data based on view mode
  const chartData =
    viewMode === "type"
      ? {
          labels: Object.keys(expensesByType),
          datasets: [
            {
              data: Object.values(expensesByType),
              backgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56",
                "#4BC0C0",
                "#9966FF",
                "#FF9F40",
              ],
            },
          ],
        }
      : {
          labels: Object.keys(expensesByMonth),
          datasets: [
            {
              data: Object.values(expensesByMonth),
              backgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56",
                "#4BC0C0",
                "#9966FF",
                "#FF9F40",
              ],
            },
          ],
        };

  // Handle toggle change
  const handleViewModeChange = (event, newViewMode) => {
    if (newViewMode !== null) setViewMode(newViewMode);
  };

  return (
    <SummaryContainer>
      {/*header and total expenses display*/}
      <Typography variant="h4" align="center" gutterBottom>
        Expense Summary
      </Typography>
      <Typography variant="h5" align="center" gutterBottom>
        Total Expenses: ${totalExpenses.toFixed(2)}
      </Typography>

      {/* Toggle for Type or Month */}
      <Box display="flex" justifyContent="center" mb={2}>
        <ToggleButtonGroup
          value={viewMode}
          exclusive
          onChange={handleViewModeChange}
          aria-label="View Mode"
        >
          <ToggleButton value="type" aria-label="Type">
            Type
          </ToggleButton>
          <ToggleButton value="month" aria-label="Month">
            Month
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>

      {/*pie chart display area*/}
      <Box sx={{ height: 300, marginBottom: 3 }}>
        <Pie data={chartData} options={{ maintainAspectRatio: false }} />
      </Box>

      {/* Display individual amounts based on selected view mode */}
      <Grid container spacing={2}>
        {Object.entries(
          viewMode === "type" ? expensesByType : expensesByMonth
        ).map(([label, amount]) => (
          <Grid item xs={12} sm={6} md={4} key={label}>
            {/* Display category icons and amounts when viewing by type */}
            {viewMode === "type" ? (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Box display="flex" alignItems="center">
                  <CategoryIcon category={label} />
                  <Typography sx={{ ml: 1 }}>
                    {label}: ${amount.toFixed(2)}
                  </Typography>
                </Box>
              </motion.div>
            ) : (
              <Box display="flex" alignItems="center">
                {/* Display only month names and amounts when viewing by month */}
                <Typography sx={{ ml: 1 }}>
                  {label}: ${amount.toFixed(2)}
                </Typography>
              </Box>
            )}
          </Grid>
        ))}
      </Grid>
    </SummaryContainer>
  );
};

export default ExpenseSummary;
