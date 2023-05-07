import React from 'react'
import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import styles from './styles.module.scss'



const ItemCart = ({item}) => {  

   /* Traemos del context las funciones para agregar y sacar productos del carrito */
  const {deleteItemToCart, addItemToCart} = useContext(CartContext);

  
  return ( 
  <div className={styles.cartItem}>
    <img src={item.img} alt={item.name} />
    <div className={styles.dataContainer}>
      <div className={styles.left}>
        <p>{item.name}</p>
        <div className={styles.buttons}>
          <button onClick={() => addItemToCart(item)}>Agregar</button>
          <button onClick={() => deleteItemToCart(item)}>Eliminar</button>
        </div>
      </div>
      <div className={styles.right}>
        <div>{item.amount}
          <p>Total: ${item.amount * item.price}</p>
        </div>
      </div>
    </div>
  </div>
  );
};

export default ItemCart

/*  este componente representa la visualización de un item dentro del carrito de compras. 
Se muestra la imagen, nombre, cantidad, precio unitario y precio total del item. 
Además, se proporcionan botones para agregar o eliminar el item del carrito.*/