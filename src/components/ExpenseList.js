import React from "react";
import { Link } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Tooltip,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { motion, AnimatePresence } from "framer-motion";
import CategoryIcon from "./CategoryIcon";

// to display a list of expenses in a table format
const ExpenseList = ({ expenses, onDelete }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Description</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <AnimatePresence>
            {expenses.map((expense) => (
              <motion.tr
                key={expense.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                {/* Render expense details in table cells */}
                <TableCell>{expense.description}</TableCell>
                <TableCell>${expense.amount}</TableCell>
                <TableCell>{expense.date}</TableCell>
                <TableCell>
                  {/* Tooltip with category icon */}
                  <Tooltip title={expense.type}>
                    <div>
                      <CategoryIcon category={expense.type} />{" "}
                      {/* Display corresponding category icon */}
                    </div>
                  </Tooltip>
                </TableCell>
                <TableCell>
                  {/* Action buttons for editing and deleting expenses */}
                  <IconButton component={Link} to={`/edit/${expense.id}`}>
                    <EditIcon />
                  </IconButton>
                  <IconButton onClick={() => onDelete(expense.id)}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </motion.tr>
            ))}
          </AnimatePresence>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ExpenseList;
