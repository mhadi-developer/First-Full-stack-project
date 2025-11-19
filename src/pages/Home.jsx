import React from 'react'
import ProductCard from '../components/ProductCard'
import { products } from '../data'
const Home = () => {
  return (
    <div>
       <div className="container">
    <div className="row">
      {
        products.map(product=>(
          <div className="col-md-4">
           <ProductCard product={product}/>
      </div>
        ))
      }
    </div>
  </div>
    </div>
  )
}

export default Home
