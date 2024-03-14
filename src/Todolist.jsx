import React from 'react'
import Additem from './components/Additem';
import Items from './components/Items';

const Todolist = () => {
  const date = new Date();
  const month = date.getMonth();
  const day = date.getDay();

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const days = [
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
  ];

  
  return (
    <div className='todolist'>
      <div className='detailBar'>
        <p>{date.getDate()} {months[month]}, {days[day]}</p>
      </div>
      <Items/>
      <Additem/>
    </div>
  )
}

export default Todolist