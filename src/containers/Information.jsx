import React from 'react'
import '../styles/components/Information.css'
import { Link } from 'react-router-dom'
function Information() {
  return (
    <div className="Informatin">
      <div className="Information-content">
        <div className="Information-head">
          <h2>Informacion de contacto</h2>
        </div>
        <div className="Information-form">
          <form action="">
            <input type="text" placeholder='Nombre Completo' name='name'/>
            <input type="text" placeholder='Correo Electronico' name='email'/>
            <input type="text" placeholder='Dirección' name='address'/>
            <input type="text" placeholder='apto' name='apto'/>
            <input type="text" placeholder='Ciudad' name='city'/>
            <input type="text" placeholder='País' name='country'/>
            <input type="text" placeholder='Región' name='state'/>
            <input type="text" placeholder='Código postal' name='cp'/>
            <input type="text" placeholder='Teléfono' name='phone'/>

          </form>
        </div>
        <div className="Information-buttons">
          <div className="Information-back">
            Regresar
          </div>
          <div className="Information-next">
          <Link to='/checkout/payment'>
          Pagar

          </Link>
          
          </div>
        </div>
      </div>
      <div className="Information-sidebar">
        <div className="Information-item">
          <div className="Information-element">
            <h4>
              Item Name
            </h4>
            <span>$10</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Information