import React, { useContext, useState } from 'react'
import ItemContext from '../context/ItemContext'


const Additem = () => {

  const {item,setItem} = useContext(ItemContext);
  const [value, setValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setItem([...item,value]);
    setValue("");
  }
  
  const handleChange = (event) => {
    setValue(event.target.value);
  }
  return (
      <form className='add' action="" onSubmit={handleSubmit}>
        <input onChange={handleChange} className='input' type="text" placeholder='Add items'
          name="" value={value} />
        <button type='submit'><img src="/images/add.png" alt="" /></button>
      </form>

  )
}

export default Additem