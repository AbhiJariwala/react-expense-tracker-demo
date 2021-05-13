import './Chart.css';
import ChartBar from "./ChartBar";

const Chart = props => {

  let expenseValues = props.data.map(item => item.value);
  let maximumTotalAmount = Math.max(...expenseValues);

  return (
    <div className="chart">
      {props.data.map(item => (
        <ChartBar key={item.label} label={item.label} value={item.value} maxValue={maximumTotalAmount}/>))}
    </div>
  );
};

export default Chart;