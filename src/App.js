import './App.css';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import {useState} from "react";

const DUMMY_STATE = [
  {id: 'e1', title: 'New TV', amount: 1099.50, date: new Date(2021, 7, 19)},
  {id: 'e2', title: 'New Computer', amount: 2500, date: new Date(2020, 1, 28)},
  {id: 'e3', title: 'New Laptop', amount: 699, date: new Date(2021, 6, 30)},
  {id: 'e4', title: 'New Refrigerator', amount: 499, date: new Date(2020, 11, 5)},
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_STATE);

  const onNewExpenseAddHandler = expenseData => {
    setExpenses(prevExpense => ([expenseData, ...prevExpense]));
  }

  return (
    <div className="App">
      <NewExpense onSave={onNewExpenseAddHandler}/>
      <Expenses expenses={expenses}/>
    </div>
  );
};

export default App;
