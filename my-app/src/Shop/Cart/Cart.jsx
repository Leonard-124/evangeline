
import React from 'react'
import ProductList from './ProductList/ProductList'
import Shopnav from '../Shopnav'
import Carttotals from './Carttotals'
import Footer from '../../Components/Footer'

const Cart = () => {
  return (
    <>
    <Shopnav />
    <ProductList />
    <Carttotals />
    <Footer />
    </>
    
  )
}

export default Cart
