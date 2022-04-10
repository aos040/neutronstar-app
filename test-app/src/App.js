
import './App.css';

import {useSelector } from 'react-redux';

import {
  HashRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import React from 'react';

import Navbar from './components/js/Navbar';
import LogInScreen from './screens/LogInScreen';
import RegisterScreen from './screens/RegisterScreen';
import Footer from './components/js/Footer';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen'
import ProductsScreenAdmin from './screens/ProductsScreenAdmin';
import ProductCreateScreen from './screens/ProductCreateScreen';
import AddressScreen from './screens/AddressScreen';
import PaymentScreen from './screens/PaymentScreen';
import OrderScreen from './screens/OrderScreen';
import OrderConfirmedScreen from './screens/OrderConfirmedScreen';

import UploadsScreen from './screens/UploadsScreen';
import UploadExclusiveScreen from './screens/UploadExclusiveScreen';
import UploadCommentsScreen from './screens/UploadCommentsScreen';
import UploadMediaScreen from './screens/UploadMediaScreen';
import UploadPaymentMethodScreen from './screens/UploadPaymentMethodScreen';
import UploadAppStoreScreen from './screens/UploadAppStoreScreen';
import UploadCoverScreen from './screens/UploadCoverScreen';
import UploadIconScreen from './screens/uploadIconScreen';
import UploadTokenScreen from './screens/UploadTokenScreen';
import DeleteTokenScreen from './screens/DeleteTokenScreen';

function App() {

  const statics = useSelector((state) => state.statics)
  const {staticData} = statics

  return (
    <Router className="App">

      <Navbar/>

      {/* Dynamic Routes */}
      <Routes>
        <Route path='/' element={<HomeScreen/>}/>
        <Route path='/product/:id' element={<ProductScreen/>}/>
        <Route path="/cart/:id" element={<CartScreen/>}/>
        <Route path="/cart/" element={<CartScreen/>} />
        <Route path="/login/" element={<LogInScreen/>} />
        <Route path="/register/" element={<RegisterScreen/>} />
        <Route path="/createproduct/" element={<ProductsScreenAdmin/>} />

        <Route path='/admin/products/' element={<ProductsScreenAdmin/>} />
        <Route path='/admin/products/create/' element={<ProductCreateScreen/>} />
        <Route path='/admin/upload/' element={<UploadsScreen/>} />
        <Route path='/admin/uploadexclusive/' element={<UploadExclusiveScreen/>} />
        <Route path='/admin/uploadcomments/' element={<UploadCommentsScreen/>} />
        <Route path='/admin/uploadmedia/' element={<UploadMediaScreen/>} />
        <Route path='/admin/uploadpayment/' element={<UploadPaymentMethodScreen/>} />
        <Route path='/admin/uploadstore/' element={<UploadAppStoreScreen/>} />
        <Route path='/admin/uploadcover/' element={<UploadCoverScreen/>} />
        <Route path='/admin/uploadicon/' element={<UploadIconScreen/>} />
        <Route path='/admin/uploadtoken/' element={<UploadTokenScreen/>} />
        <Route path='/admin/deletetoken/' element={<DeleteTokenScreen/>} />

        
        <Route path='/address/' element={<AddressScreen/>} />
        <Route path='/payment/' element={<PaymentScreen/>} />
        <Route path='/order/' element={<OrderScreen/>} />
        <Route path='/order_confirmed/' element={<OrderConfirmedScreen/>} />

      </Routes>

      {staticData && Object.keys(staticData).length !== 0 ? <Footer staticData={staticData}/> : ''}
  

  </Router>
  );
}

export default App;
