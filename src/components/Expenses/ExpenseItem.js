import React, {useState} from 'react';
import ExpenseDate from './ExpenseDate'
import './ExpenseItem.css'
import Card from '../UI/Card'

const ExpenseItem = (props) => {
    
const [title, setTitle] = useState(props.title);

    const ClickHandler = ()=>{
      setTitle('updated');
      console.log('clicked');
    }

  return (

    <Card className = 'expense-item'>
        <ExpenseDate date = {props.date}></ExpenseDate>
        <div className = 'expense-item__description'>
        <h2 className = 'expense-item h2'>{title}</h2>
        <div className = 'expense-item__price'>${props.amount}</div>
      </div>
     <button onClick = {ClickHandler}>click me!!</button>
    </Card>
  );
}

export default ExpenseItem;
