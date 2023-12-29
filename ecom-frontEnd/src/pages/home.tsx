import React from 'react'
import { Link } from 'react-router-dom'
import ProductCart from '../components/product-cart'

const Home = () => {

  const addToCartHandler = () => { };

  return (
    <div className="home">
      <section></section>

      <h1>Latest Products
        <Link to="/search" className='findmore'>
          More
        </Link>
      </h1>
      

      <main>
        <ProductCart
          productId='akakak'
          name='Apple'
          price={90000}
          stock={100}
          handler={addToCartHandler}
          photo="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71d7rfSl0wL._SX679_.jpg"
        />
      </main>
   </div> 
  )
}

export default Home
