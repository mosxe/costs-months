
import { useState } from 'react';
import CostList from './CostList';
import CostFilter from './CostFilter';
import Card from '../UI/Card'; 
import './Costs.css';

const Costs = ({costs}) => {
  const [selectedYear, setSelectedYear] = useState('2021');
  const changeYear = (year) => {
    setSelectedYear(year);
  };

  const filterCosts = costs.filter(cost => {
    return cost.date.getFullYear().toString() === selectedYear;
  });
  
  return (
    <Card className="costs">
      <CostFilter year={selectedYear} onChangeYear={changeYear} />
      <CostList costs={filterCosts} />
    </Card>
  )
};

export default Costs;