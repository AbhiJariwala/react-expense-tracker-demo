import './Expenses.css';
import Card from "../UI/Card";
import {useState} from "react";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";

const Expenses = props => {

  const [selectedYear, setSelectedYear] = useState('2021');

  const onYearFilterChangeHandler = year => {
    setSelectedYear(year)
  };

  const filteredExpenses = props.expenses.filter(expense => expense.date.getFullYear().toString() === selectedYear);

  let expensesContent = (<p>No data found</p>);
  if (filteredExpenses.length) {
    expensesContent = filteredExpenses.map(expense => (
      <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}/>));
  }

  return (
    <Card className="expenses">
      <ExpenseFilter selectedYear={selectedYear} onYearFilterChange={onYearFilterChangeHandler}/>
      {expensesContent}
    </Card>
  );
};

export default Expenses;