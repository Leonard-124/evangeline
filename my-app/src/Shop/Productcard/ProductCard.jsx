

import React from 'react'
import Shopnav from '../Shopnav'
import Product from './Product'
import Productpath from './Productpath'
import Related from './Related/Related'
import Footer from '../../Components/Footer'

const ProductCard = () => {
  return (
    <>
    <Productpath />
      <Shopnav />
      <Product />
      <Related />
      <Footer />
    </>
  )
}

export default ProductCard


