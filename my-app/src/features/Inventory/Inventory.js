import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Item from '../Item/Item';
import {
  selectInventory,
  addItem,
} from './inventorySlice';

import "./Inventory.css"

export function Inventory() {
  const inventory = useSelector(selectInventory);
  const dispatch = useDispatch();
  const [ItemInputs,setItemInputs] = useState({nameInput:"",priceInput:""})

  const handleChange = e =>{
    let newItemInputs={...ItemInputs}
    newItemInputs[e.target.name]=e.target.value
    setItemInputs(newItemInputs)
  } 

  return (
    <div>
    <div className='numberitems'> Number Of Items In Our Inventory: {inventory.length}</div>
      <span className='ourproducts'>Our products:</span>
      <span>{inventory.map(item=><Item item={item}/>)}</span>
      <div>Add Another Item To Our Inventory: </div>
      <div className='addItemGrid'>
      <input onChange={handleChange} placeholder='name' name="nameInput"></input>
      <input onChange={handleChange} placeholder='price' name="priceInput"></input>
      <button className="additem" onClick={() => dispatch(addItem({"name": ItemInputs.nameInput,"price": ItemInputs.priceInput}))}>Add Item !</button>
      </div>
    </div>
  );
}
