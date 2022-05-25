
import CostItem from './CostItem';
import './Costs.css';

const Costs = ({costs}) => {
  return (
    <div className="costs">
      {
        costs.map((cost, index) => <CostItem key={index} {...cost}/>)
      }
    </div>
  )
};

export default Costs;