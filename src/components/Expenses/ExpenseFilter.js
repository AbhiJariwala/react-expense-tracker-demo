import './ExpenseFilter.css';

const ExpenseFilter = props => {

  const onFilterChangeHandler = event => {
    props.onYearFilterChange(event.target.value);
  };

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={props.selectedYear} onChange={onFilterChangeHandler}>
          <option value='2019'>2019</option>
          <option value='2020'>2020</option>
          <option value='2021'>2021</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;