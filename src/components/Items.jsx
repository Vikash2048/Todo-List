import React, { useContext, useState, useEffect } from 'react';
import ItemContext from '../context/ItemContext';

const Items = () => {
  const [click, setClick] = useState(false);
  const { item, setItem } = useContext(ItemContext);
  const [check, setCheck] = useState("");
  const [editCheck,setEditCheck] = useState(false);
  const [edititem, setEditItem] = useState("");

  const displayStyle = click ? "block" : "none";

  const getIconStyle = (isActive) => ({
    display: isActive ? displayStyle : "none"
  });

  const handleClick = (i) => {
    setClick(!click);
    setCheck(i); // Set check value to the clicked item
  }

  const handleDelete = (id) => {
    const newArray = item.filter((element, index) => index !== id);
    setItem(newArray);
  }

  const handleEdit = (id) => {
    setEditCheck(!editCheck);
    setEditItem(item[id]);
  }
  const handleChange = (event) => {
    setEditItem(event.target.value);
  }

  const handleSubmit = (id) => {
    item[id] = edititem;
    setEditCheck("");
  }

  return (
    <>
      {
        item.map((i, id) => (
          <div key={id} className='items'>
            <div>
              <p className='time'>9:45</p>
              <div className='taskInput'>
                {
                  editCheck && check === id ? <input type="text" onChange={handleChange} value={edititem}/> 
                  : <p className='task'>{i}</p>
                }
                
              </div>

            </div>
            <div onClick={() => handleClick(id)}>
              {
                click && check === id ? <img className='img' src="/images/cross.png" alt="" />
                  : <img className='img' src="/images/more.png" alt="" />
              }
            </div>

            {/* Conditionally apply style based on check value */}
            <img className='icons' id='edit' onClick={() => handleEdit(id)}  style={getIconStyle(check === id)} src="/images/pencil.png" alt="" />
            <img className='icons' id='delete' onClick={() => handleDelete(id)} style={getIconStyle(check === id)} src="/images/delete.png" alt="" />
            <img className='icons' id='submit'onClick={() => handleSubmit(id)} style={getIconStyle(check === id)} src="/images/check-mark.png" alt="" />
          </div>
        ))
      }
    </>
  )
}

export default Items;
