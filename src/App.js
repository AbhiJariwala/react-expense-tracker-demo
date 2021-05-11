import './App.css';
import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expense = [
    {id: 'e1', title: 'New TV', amount: 1099.50, date: new Date(2021, 7, 19)},
    {id: 'e2', title: 'New Computer', amount: 2500, date: new Date(2020, 1, 28)},
    {id: 'e3', title: 'New Laptop', amount: 699, date: new Date(2021, 6, 30)},
    {id: 'e4', title: 'New Refrigerator', amount: 499, date: new Date(2019, 11, 5)},
  ];

  return (
    <div className="App">
      React Demo
      <ExpenseItem title={expense[0].title} amount={expense[0].amount} date={expense[0].date}></ExpenseItem>
      <ExpenseItem title={expense[1].title} amount={expense[1].amount} date={expense[1].date}></ExpenseItem>
      <ExpenseItem title={expense[2].title} amount={expense[2].amount} date={expense[2].date}></ExpenseItem>
      <ExpenseItem title={expense[3].title} amount={expense[3].amount} date={expense[3].date}></ExpenseItem>
    </div>
  );
}

export default App;
