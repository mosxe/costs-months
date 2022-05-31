import { useState } from 'react';
import CostForm from './CostForm';
import './NewCost.css';

const NewCost = (props) => {
  const [visibleForm, setVisibleForm] = useState(false);

  const visibleFormHandler = () => {
    setVisibleForm(prev => !prev);
  }

  const saveCostDataHandler = (inputCostData) => {
    const costData = {
      ...inputCostData,
      id: Math.random().toString()
    }
    props.onAddCost(costData);
    visibleFormHandler();
  };

  if (!visibleForm) {
    return (
      <div className="new-cost">
        <button onClick={visibleFormHandler}>Добавить новый расход</button>
      </div>
    );
  }

  return (
    <div className="new-cost">
      <CostForm onSaveCostData={saveCostDataHandler} visibleFormHandler={visibleFormHandler}/>
    </div>
  );
};

export default NewCost;