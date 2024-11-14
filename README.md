# Personal Expense Tracker

## Project Description

This Personal Expense Tracker is a web application that allows users to manage their personal expenses efficiently. Users can add, edit, delete, and view their expenses, along with visualizations of their spending patterns.

## Features

- Add new expenses with details like description, amount, date, and category
- View a list of all expenses
- Edit existing expense entries
- Delete unwanted expenses
- Visualize expenses with charts (by category and month)
- Responsive design for various screen sizes

## Technologies and Libraries Used

- React.js
- Material-UI (MUI)
- Formik (for form handling)
- Yup (for form validation)
- Chart.js and react-chartjs-2 (for data visualization)
- Framer Motion (for animations)
- React Router (for navigation)
- Local Storage (for data persistence)

## Setup Instructions

1. **Clone the Repository**
   git clone https://github.com/reema-15/personal-expense-tracker.git
   cd personal-expense-tracker

2. **Install Dependencies**
   npm install

3. **Run the Application**
   npm start

4. **Access the Application**

- Open your browser and go to `http://localhost:3000`

## Usage Guide

1. **Adding an Expense**

- Click the '+' button on the home page
- Fill in the expense details and submit

2. **Viewing Expenses**

- All expenses are listed on the home page

3. **Editing an Expense**

- Click the edit icon next to an expense in the list
- Modify the details and save

4. **Deleting an Expense**

- Click the delete icon next to an expense in the list

5. **Viewing Expense Summary**

- The summary and charts are displayed on the home page
- Toggle between 'Type' and 'Month' views for different perspectives

## Assumptions and Limitations

- The application uses browser local storage for data persistence
- It's designed for personal use and doesn't include user authentication

## Testing Optional Features

1. **Data Visualization**

- Add multiple expenses of different types and dates
- Check the pie chart and summary section for accurate representation

2. **Animations**

- Observe smooth transitions when adding or deleting expenses
- Notice icon animations in the expense list

3. **Responsive Design**

- Test the application on different devices or use browser developer tools to simulate various screen sizes
