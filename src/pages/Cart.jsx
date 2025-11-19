import React from 'react'
import { CartContext } from '../App.jsx'
import { useContext } from 'react'



const Cart = () => {

const {cart, setCart} = useContext(CartContext)

 const handelDelete = (id)=> {
let updatedCart = cart.filter( c=>c.id != id )
 setCart(updatedCart)
}


const handelClearCart=()=>{

  setCart([])
}

  return (
    <div className='container'>
     

        <table className="table">
  <thead>
    <tr>
      <th scope="col">image</th>
      <th scope="col">Title</th>
      <th scope="col">Price</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
    {
          cart.map(item=>(
             <tr key={item.id}>
     
      <td><img width={50} src={item.image} alt="" /></td>
      <td>{item.title}</td>
      <td>{item.price}</td>
      <td>
        <button className='btn btn-danger' 
        onClick={()=>handelDelete(item.id)}>
          <i className="bi bi-trash-fill"></i>
        </button>
      </td>
    </tr>
          ))
        }


   
   
   
  </tbody>
</table>

<button className='btn btn-danger' onClick={handelClearCart}>Clear Cart</button>
    </div>
  )
}

export default Cart