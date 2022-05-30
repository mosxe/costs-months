import Costs from './components/Costs/Costs';
import NewCost from './components/NewCost/NewCost';

const App = () => {
  const costs = [
    {
      id: 'rand1',
      date: new Date(2021,2,12),
      description: 'Ящик',
      amount: 9299
    },
    {
      id: 'rand2',
      date: new Date(2021,3,22),
      description: 'Окно',
      amount: 1999
    }
  ];

  const addCostHandler = (cost) => {
    console.log(cost);
  };
  return (
    <div>
      <NewCost onAddCost={addCostHandler}/>
      <Costs costs={costs}/>
    </div>
  );
}

export default App;
