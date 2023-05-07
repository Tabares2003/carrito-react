import React, { useContext } from 'react'
import styles from  './styles.module.scss'
import { ProductsData } from '../../Data/ProductsData'
import { CartContext } from '../../Context/CartContext'


const Products = () => {

  /* Traemos del context la funcion para agregar un producto */
  const{addItemToCart} = useContext(CartContext)

// Se define el contenedor principal de los productos.
  return (
    <div className={styles.productsContainer}>
      {ProductsData.map((product, i) => (
        <div key={i} className={styles.product}>
        <img src={product.img} alt={product.name} />
        <div>
          <p>
            {product.name} - ${product.price}
          </p>
        </div>
        <button onClick={() => addItemToCart(product)}>Agregar al carrito</button>
        </div>
      ))}
    </div>
  )
}

export default Products