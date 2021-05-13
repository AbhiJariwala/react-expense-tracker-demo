import './ExpenseForm.css';
import {useState} from "react";

const ExpenseForm = props => {

  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState(0);
  const [selectedDate, setSelectedDate] = useState(new Date());

  // const [formState, setFormState] = useState({enteredTitle: '', enteredAmount: '', selectedDate: ''});

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);

    // setFormState({
    //   ...formState,
    //   enteredTitle: event.target.value
    // });

    // setFormState((prevState) => ({...prevState, enteredTitle: event.target.value}));
  }

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);

    // setFormState({
    //   ...formState,
    //   enteredAmount: event.target.value
    // });

    // setFormState((prevState) => ({...prevState, enteredAmount: event.target.value}));
  }

  const dateChangeHandler = (event) => {
    setSelectedDate(event.target.value);

    // setFormState({
    //   ...formState,
    //   selectedDate: event.target.value
    // });

    // setFormState((prevState) => ({...prevState, selectedDate: event.target.value}));
  };

  const onSubmitHandler = event => {
    event.preventDefault();

    const formData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(selectedDate)
    };

    props.onSave(formData);
    setEnteredTitle('');
    setEnteredAmount('');
    setSelectedDate('');
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} value={enteredTitle}/>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler} value={enteredAmount}/>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2021-12-31" onChange={dateChangeHandler} value={selectedDate}/>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;