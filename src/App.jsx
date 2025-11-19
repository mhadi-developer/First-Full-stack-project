
import './App.css'
import Home from './pages/home'
import About  from "./pages/About";
import Nav from './components/nav'
import { BrowserRouter , Routes , Route} from "react-router";
import Cart from './pages/Cart';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Details from './pages/Details';
import { createContext, useState, useEffect } from 'react';

// eslint-disable-next-line react-refresh/only-export-components
export const CartContext = createContext()


function App() {

  const  [cart , setCart]= useState([])


  useEffect(()=>{
  const cartFromStorage = JSON.parse(localStorage.getItem('cart'))

  
  setCart(cartFromStorage || [])

  },[])


  useEffect(()=>{
  if(cart.length){
    localStorage.setItem('cart',JSON.stringify(cart))
  }
  },[cart])



return (
  <>

<CartContext.Provider value={{cart , setCart}}>
 <BrowserRouter> 
  <Nav/>
   <Routes>
    <Route path ='/' element={<Home/>} />
         <Route path ='/about' element={<About/>} />
             <Route path ='/cart' element={<Cart/>} />
               <Route path ='/login' element={<Login/>} />
             <Route path ='/products/:slug' element={<Details/>} />
           <Route path ='*' element={<NotFound/>} />
         </Routes>  
      </BrowserRouter>
    </CartContext.Provider>


  </>
)
 
}





export default App
