/*Agregue el carrito y los productos a la home*/

import React from 'react'
import styles from "./styles.module.scss"
import Cart from '../Cart'
import Products from '../Products'

const Home = () => {
  return (
    
    <div className={styles.Home}>

        <Cart />
        <Products />
    </div>

  )
}


export default Home