import React, { useState } from 'react'
import Header from '../components/Header.jsx'
import ProductComparison from "../components/ProductComparison.jsx";
import Product from '../components/Product.jsx';

function HomePage() {
  const [isSubmited,setIsSubmited] = useState(false)

  const handleSubmit = () => {
    isSubmited ? setIsSubmited(false) : setIsSubmited(true)
  } 

  return (
    <>
      <Header/>
      <ProductComparison handleSubmit={handleSubmit}/>
      {isSubmited && <Product /> }
      
    </>

)
}

export default HomePage