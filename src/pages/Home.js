// page for displaying expense list and summary
import React from "react";
import { Link } from "react-router-dom";
import { Container, Fab, Box, Grid, Paper, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { motion } from "framer-motion";
import ExpenseList from "../components/ExpenseList";
import ExpenseSummary from "../components/ExpenseSummary";
import { useExpenses } from "../contexts/ExpenseContext";

const Home = () => {
  const { expenses, dispatch } = useExpenses();

  //To handle delete an expense using its ID
  const handleDelete = (id) => {
    dispatch({ type: "DELETE_EXPENSE", payload: id });
  };

  return (
    <Container maxWidth="lg">
      <Grid container spacing={3} style={{ height: "100vh" }}>
        <Grid item xs={12} md={7}>
          <Paper
            elevation={3}
            style={{ height: "100vh", overflowY: "auto", padding: "16px" }}
          >
            <Typography variant="h5" align="center" gutterBottom>
              Expense List
            </Typography>
            <ExpenseList expenses={expenses} onDelete={handleDelete} />{" "}
            {/*for expenses list */}
          </Paper>
        </Grid>
        <Grid item xs={12} md={5}>
          <Paper>
            <ExpenseSummary expenses={expenses} /> {/*for expenses summary */}
          </Paper>
        </Grid>
      </Grid>
      <Box sx={{ position: "fixed", bottom: 16, right: 16 }}>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Fab color="primary" component={Link} to="/add">
            <AddIcon /> {/*button for new expense */}
          </Fab>
        </motion.div>
      </Box>
    </Container>
  );
};

export default Home;
