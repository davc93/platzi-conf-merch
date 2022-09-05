import React from 'react';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import Home from '../containers/Home';
import Checkout from '../containers/Checkout';
import Information from '../containers/Information';
import NotFound from '../containers/NotFound';
import Payment from '../containers/Payment';
import Success from '../containers/Success'
import Layout from '../components/Layout';
import AppContext from '../context/AppContext';
import useInitialState from '../hooks/useInitialState';
function App() {

  const initialState = useInitialState()

  return (

    <AppContext.Provider>
        <BrowserRouter>
        <Layout>
        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/checkout' element={<Checkout/>} />
            <Route exact path='/checkout/information' element={<Information/>} />
            <Route exact path='/checkout/payment' element={<Payment/>} /> 
            <Route path='*' element={<NotFound/>} />
            <Route path='/checkout/success' element={<Success />} />
        </Routes>
        </Layout>

    </BrowserRouter>
  
    </AppContext.Provider>

  )
}

export default App