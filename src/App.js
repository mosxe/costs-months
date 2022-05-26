import Costs from './components/Costs/Costs';
import NewCost from './components/NewCost/NewCost';

const App = () => {
  const costs = [
    {
      date: new Date(2021,2,12),
      description: 'Ящик',
      amount: 9299
    },
    {
      date: new Date(2021,3,22),
      description: 'Окно',
      amount: 1999
    }
  ];
  return (
    <div>
      <NewCost />
      <Costs costs={costs}/>
    </div>
  );
}

export default App;
