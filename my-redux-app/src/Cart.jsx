import React from 'react'
import { addToCart } from './cartSlice'
import { useDispatch, useSelector } from 'react-redux'

const Cart = () => {
    const items=useSelector((state)=> state.cart.items);
    const dispatch =useDispatch();
  return (
    <div>
        <h2>Shopping Cart</h2>
        <p>Items:{items.length}</p>
        <button onClick={()=>dispatch(addToCart({id:1,name:"laptop",price:700000}))}>Add Laptop</button>
    </div>
  )
}

export default Cart