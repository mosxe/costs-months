
import { useState } from 'react';
import CostItem from './CostItem';
import CostFilter from './CostFilter';
import './Costs.css';

const Costs = ({costs}) => {
  const [selectedYear, setSelectedYear] = useState('2021');
  const changeYear = (year) => {
    setSelectedYear(year);
  }
  return (
    <div className="costs">
      <CostFilter year={selectedYear} onChangeYear={changeYear} />
      {
        costs.map((cost, index) => <CostItem key={index} {...cost}/>)
      }
    </div>
  )
};

export default Costs;