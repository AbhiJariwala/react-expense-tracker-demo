import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

const NewExpense = props => {

  const onNewExpenseAddHandler = formData => {
    const newExpenseData = {
      ...formData,
      id: Math.random().toString()
    };
    props.onSave(newExpenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSave={onNewExpenseAddHandler}/>
    </div>
  );
};

export default NewExpense;