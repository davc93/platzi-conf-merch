import React from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';
import '../styles/components/Checkout.css';
import {Helmet} from 'react-helmet'
function Checkout() {
  const { state, removeFromCart } = React.useContext(AppContext);
  const { cart } = state;

  const handleRemove = (product) => () => {
    removeFromCart(product);
  };
  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  };
  return (
    <React.Fragment>
      <Helmet>
        <title>Lista de pedidos - platzi conf</title>
      </Helmet>
      <div className="Checkout">
      <div className="Checkout-content">
        {cart.length > 0 ? <h3>Lista de pedidos</h3> : <h3>Agregar algun producto</h3> }
        {cart.map((item) => (
          <div className="Checkout-item">
            <div className="Checkout-element">
              <h4>{item.title}</h4>
              <span>
                $
                {item.price}
              </span>
            </div>
            <button type="button" onClick={handleRemove(item)}>
              <i className="fas fa-trash-alt" />
            </button>
          </div>
        ))}

      </div>
      {cart.length > 0 && (
        <div className="Checkout-sidebar">
          <h3>
            Precio Total:$
            {handleSumTotal()}
          </h3>
          <Link to="/checkout/information">
            <button type="button">Continuar</button>
          </Link>
        </div>
      )}

    </div>

    </React.Fragment>
  );
}

export default Checkout;
