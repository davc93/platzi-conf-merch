import React from 'react';
import AppContext from '../context/AppContext';
import '../styles/components/Payment.css';
import {useNavigate} from 'react-router-dom'
import { PayPalButton } from 'react-paypal-button-v2'

function Payment() {
  const navigate = useNavigate()
  const { state, addNewOrder } = React.useContext(AppContext);
  const { cart, buyer } = state;
  const paypalOptions = {
    clientId: 'AQ7lKbFiuvh74TOvJOFdhontvDX35hBATe493aXg98ryorduAmznhL2PdfVknbGMadVofD9bK1gCdNIg',
    intent: 'capture',
    currency: 'USD',
  }

  const buttonStyles = {
    layout: 'vertical',
    shape: 'rect',

  }


  const handlePaymentSuccess = (data) => {
    console.log(data);
    if(data.status === 'COMPLETED'){
      const newOrder = {
        buyer,
        product:cart,
        payment:data
      }
      addNewOrder(newOrder)
      navigate('/checkout/success');
    }
  }

  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  };
  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Resumen del pedido</h3>
        {cart.map((item) => {
          return (
            <div className="Payment-item" key={item.title}>
              <div className="Payment-element">
                <h4>{item.title}</h4>
                <span>${item.price}</span>
              </div>
            </div>
          )
        })}
        <div className="Payment-button">
          <PayPalButton
        
            style={ buttonStyles}
            amount={handleSumTotal()}
            onSuccess={data=>handlePaymentSuccess(data) }

          />
        </div>
      </div>
    </div>
  );
}

export default Payment;
