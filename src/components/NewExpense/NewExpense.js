import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";
import {useState} from "react";

const NewExpense = props => {

  const [isEditing, setIsEditing] = useState(false);

  const onNewExpenseAddHandler = formData => {
    const newExpenseData = {
      ...formData,
      id: Math.random().toString()
    };
    props.onSave(newExpenseData);
    setIsEditing(false);
  };

  const startEditing = _ => {
    setIsEditing(true);
  };

  const stopEditing = _ => {
    setIsEditing(false);
  }

  return (
    <div className="new-expense">
      {!isEditing && <button onClick={startEditing} type='button'>Add Expense</button>}
      {isEditing && <ExpenseForm onCancel={stopEditing} onSave={onNewExpenseAddHandler}/>}
    </div>
  );
};

export default NewExpense;