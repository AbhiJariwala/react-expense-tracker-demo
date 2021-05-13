import './Expenses.css';
import Card from "../UI/Card";
import {useState} from "react";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpenseChart from "./ExpenseChart";

const Expenses = props => {

  const [selectedYear, setSelectedYear] = useState('2021');

  const onYearFilterChangeHandler = year => {
    setSelectedYear(year)
  };

  const filteredExpenses = props.expenses.filter(expense => expense.date.getFullYear().toString() === selectedYear);

  return (
    <Card className="expenses">
      <ExpenseFilter selectedYear={selectedYear} onYearFilterChange={onYearFilterChangeHandler}/>
      <ExpenseChart expenses={filteredExpenses}/>
      <ExpensesList expenses={filteredExpenses}/>
    </Card>
  );
};

export default Expenses;