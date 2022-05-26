import { useState } from 'react';
import CostDate from './CostDate';
import Card from '../UI/Card'; 
import './CostItem.css';

const CostItem = (props) => {
  const [description, setDescription] = useState(props.description);
  const changeDescription = (e) => {
    setDescription('Ящик1');
  }
  return (
    <Card className="cost-item">
      <CostDate date={props.date}/>
      <div className="cost-item__description">
        <h2>{description}</h2>
        <div className="cost-item__price">${props.amount}</div>
      </div>
      <button onClick={changeDescription}>Изменить описание</button>
    </Card>
  );
};

export default CostItem;