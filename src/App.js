import Home from './Components/Home';

import './App.scss';    /*import al cscc*/
import { CartProvider } from './Context/CartContext';


function App() {
  return (
    <CartProvider>
      <Home />
    </CartProvider>
  );
}

export default App;
