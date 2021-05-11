import './ExpenseItem.css';

function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>11 May 2021</div>
      <div className="expense-item__description">
        <h2>Sample Title</h2>
        <div className="expense-item__price">$234.45</div>
      </div>
    </div>
  );
}

export default ExpenseItem;