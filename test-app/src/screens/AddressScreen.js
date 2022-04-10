import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getStaticData } from '../redux/actions/footerActions'
import { getPickUpPoints } from '../redux/actions/pickUpPointActions'
import PickUpPoint from '../components/js/PickUpPoint'
import SimpleMap from '../components/js/Map'
import DefaultMap from '../components/js/DefaultMap'
import CheckOutSteps from '../components/js/CheckOutSteps'

import { saveShippingAddress } from '../redux/actions/pickUpPointActions'

import '../components/css/Shipping.css'

export default function AddressScreen() {

    const dispatch = useDispatch()
    const history = useNavigate()

    const userLogin = useSelector(state => state.userLogin)
    const {userData} = userLogin

    const pickUpPoints = useSelector(state=>state.pickUpPoints)
    const {data, shippingAddress, loading, error} = pickUpPoints

    const cart = useSelector(state => state.cart)
    const {cartItems} = cart

    const statics = useSelector((state) => state.statics)
    const {staticData} = statics
  
    const [address, setAddress] = useState(shippingAddress ? shippingAddress.address : '')
    const [postalCode, setPostalCode] = useState(shippingAddress ? shippingAddress.postalCode : '')
    const [city, setCity] = useState(shippingAddress ? shippingAddress.city : '')

    useEffect(()=>{

      dispatch(getStaticData())

      if(userData && Object.keys(userData).length === 0){
        history('/login/')
      }
      if(cartItems.length === 0){
        history('/')
      }
      
    },[dispatch])

    const findPickUpPoints = (e) =>{
      
      e.preventDefault();
      dispatch(getPickUpPoints(postalCode, staticData))
    }

    const locationClicked = (e)=>{

      e.preventDefault();

      dispatch(saveShippingAddress({address: address, postalCode:postalCode, city: city}))
      history('/payment/')
    }


    return (
      <div>
         <div><CheckOutSteps logged step2 current={2} /></div>
         {staticData && Object.keys(staticData).length !== 0 ? 
          <div className='shipping-container'>
          <div className='shipping'>

            <div className='searchh'>
              <form onSubmit={findPickUpPoints} className='search-address'>
                <div className='address'>
                  <input required type='text' value={address} onChange={(e)=>setAddress(e.target.value)} placeholder='Addresse'></input>
                </div>

                <div className='postcode-city'>
                  <div className='postcode'>
                    <label>Postnummer:</label>
                    <br/>
                    <input required type='number' value={postalCode} onChange={(e)=>setPostalCode(e.target.value)} placeholder='Postnummer'></input>
                  </div>

                  <div className='city'>
                    <label>Sted:</label>
                    <br/>
                    <input required type='text' value={city} onChange={(e)=>setCity(e.target.value)} placeholder='Sted'></input>
                  </div>
                </div>

                <div className='btn-contai'><button type='submit' className='point-btn'> Find Pickup Locations  <i class="fa-solid fa-magnifying-glass"></i></button></div>
            
                <hr style={{width:'100%'}}></hr>
              </form>
            {data.length != 0 ? <div className='pickups-container'>{data.map((point)=><PickUpPoint key={point.id} locationClicked={locationClicked} point={point}/>)}</div>: ''}

            </div>


            {data.length !== 0 ? <SimpleMap staticData={staticData} locationClicked={locationClicked} center={{lat: data[0].latitude,lng: data[0].longitude}} data={data}/> : <DefaultMap staticData={staticData}/>}
            
            </div>
          </div>    
          : 
        ''}

      </div>
  )
}
