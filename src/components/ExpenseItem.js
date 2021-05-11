import './ExpenseItem.css';

function ExpenseItem() {

  const expenseDate = new Date(2021, 4, 11);
  const expenseTitle = 'Sample Title';
  const expenseAmount = 234.45;

  return (
    <div className="expense-item">
      <div>{expenseDate.toDateString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;