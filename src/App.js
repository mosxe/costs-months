import { useState } from 'react';
import Costs from './components/Costs/Costs';
import NewCost from './components/NewCost/NewCost';

const INITIAL_COSTS = [
  {
    id: 'rand1',
    date: new Date(2021,2,12),
    description: 'Ящик',
    amount: 9299
  },
  {
    id: 'rand2',
    date: new Date(2020,3,22),
    description: 'Окно',
    amount: 1999
  }
];

const App = () => {
  const [costs, setCosts] = useState(INITIAL_COSTS);
 
  const addCostHandler = (cost) => {
    setCosts(prev => {
      return [cost,...prev]
    });
  };
    
  return (
    <div>
      <NewCost onAddCost={addCostHandler}/>
      <Costs costs={costs}/>
    </div>
  );
}

export default App;
