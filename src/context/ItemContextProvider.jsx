import React, { useState } from 'react'
import ItemContext from './ItemContext'

const ItemContextProvider = ({children}) => {
    const [item,setItem] = useState([]);
  return (
    <ItemContext.Provider value={{item,setItem}}>{children}</ItemContext.Provider>
  )
}

export default ItemContextProvider