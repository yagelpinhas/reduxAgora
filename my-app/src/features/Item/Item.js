import React, { useState } from 'react';
import { changePrice, buyItem } from '../Inventory/inventorySlice';
import { useSelector, useDispatch } from 'react-redux';
import "./Item.css"

export default function Inventory(props) {
    const dispatch = useDispatch();
    const [newPriceInput,setNewPriceInput] = useState("")
    const handlePriceChange = e =>{
        setNewPriceInput(e.target.value)
    } 

    return (
      <div className='itemGrid'>
        <span className='txt'> Name: {props.item.name} </span>
        <span className='txt'> Price: {props.item.price}  </span>
        <input onChange={handlePriceChange} placeholder='new price'></input>
        <button className="changebtn" onClick={() => dispatch(changePrice({"name": props.item.name , "price": newPriceInput}))}>Change Price </button>
        <button className="buybtn" onClick={() => dispatch(buyItem(props.item.name))}>Buy Item</button>
      </div>
    );
  }