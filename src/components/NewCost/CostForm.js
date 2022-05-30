import { useState } from 'react';
import './CostForm.css';

const CostForm = (props) => {
  const [userInput, setUserInput] = useState({
    name: '',
    amount: '',
    date: ''
  });

  const inputChangeHandler = (e) => {
    setUserInput((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value
      }
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const costData = {
      name: userInput.name,
      amount: userInput.amount,
      date: new Date(userInput.date)
    };
    props.onSaveCostData(costData);
    setUserInput({
      name: '', 
      amount: '',
      date: ''
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-cost__controls">
        <div className="new-cost__control">
          <label>Название</label>
          <input type="text" name="name" value={userInput.name} onChange={inputChangeHandler} />
        </div>
        <div className="new-cost__control">
          <label>Сумма</label>
          <input type="number" name="amount" value={userInput.amount} 
            min='0' onChange={inputChangeHandler}/>
        </div>
        <div className="new-cost__control">
          <label>Дата</label>
          <input type="date" name="date" value={userInput.date}
            min="2019-01-01" step="2022-12-31" onChange={inputChangeHandler}/>
        </div>
        <div className="new-cost__actions">
          <button type="submit">Добавить расход</button>
        </div>
      </div>
    </form>
  )
};

export default CostForm;