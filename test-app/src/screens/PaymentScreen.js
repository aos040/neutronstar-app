import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import CheckOutSteps from '../components/js/CheckOutSteps'
import { savePaymentMethod } from '../redux/actions/pickUpPointActions'
import { getStaticData } from '../redux/actions/footerActions'


import '../components/css/PaymentScreen.css'

export default function PaymentScreen() {

    const history = useNavigate()
    const dispatch = useDispatch()

    const userLogin = useSelector(state => state.userLogin)
    const {userData} = userLogin

    const pickUpPoints = useSelector(state=>state.pickUpPoints)
    const {paymentMethod} = pickUpPoints

    const cart = useSelector(state => state.cart)
    const {cartItems} = cart

    const statics = useSelector((state) => state.statics)
    const {staticData} = statics
    const paymentsupported = staticData && Object.keys(staticData).length !== 0 ? staticData.paymentsupported : false


    const vippsPaymentArr = paymentsupported !== false ? paymentsupported.filter((payment)=>payment.name==='Vipps') : false
  
    const visaElectronPaymentArr = paymentsupported !== false ? paymentsupported.filter((payment)=>payment.name==='Visa-Electron') : false
    const visaPaymentArr = paymentsupported !== false ? paymentsupported.filter((payment)=>payment.name==='Visa') : false
    const mastercardPaymentArr = paymentsupported !== false ? paymentsupported.filter((payment)=>payment.name==='Mastercard') : false
    const maestroPaymentArr = paymentsupported !== false ? paymentsupported.filter((payment)=>payment.name==='Maestro') : false
    
    
    const InitialPaymenthMethod = 'Vipps'
    const [paymentMethodVal, setPaymentMethodVal] = useState(InitialPaymenthMethod)
    
    useEffect(()=>{

        if(userData && Object.keys(userData).length === 0){
          history('/login/')
        }

        if(cartItems.length === 0){
            history('/')
        }

        dispatch(getStaticData())

      },[dispatch])

    const paymentSubmit = (e) =>{

        e.preventDefault();
        if(paymentMethod!==''){
            dispatch(savePaymentMethod(paymentMethodVal))
            history('/order/')
        }
    }

    return (
        <div>
            <CheckOutSteps logged step2 step2_checked step3 current={3} />

            <form className='payment-form'>
                <h3>Choose payment method</h3>
                
                <div className='controller'>
                    <div>
                        {vippsPaymentArr && vippsPaymentArr.length !== 0 ?
                        <div className='payment-form-control'>
                            <input type='radio' value='Vipps' checked={paymentMethodVal === 'Vipps'} onChange={(e)=>setPaymentMethodVal(e.target.value)}></input>
                            <img className='vipps-pic' src={vippsPaymentArr[0].image}/>
                        </div> : ''}
                    </div>

                    <div>
                        {visaElectronPaymentArr && visaElectronPaymentArr.length !== 0 ?
                        <div className='payment-form-control'>
                            <input type='radio' value='Visa-Electron' checked={paymentMethodVal === 'Visa-Electron'} onChange={(e)=>setPaymentMethodVal(e.target.value)}></input>                
                            <img src={visaElectronPaymentArr[0].image} />
                        </div> : ''}
                    </div>

                    <div>
                        {visaPaymentArr && visaPaymentArr.length !== 0 ?
                        <div className='payment-form-control'>
                            <input type='radio' value='Visa' checked={paymentMethodVal === 'Visa'} onChange={(e)=>setPaymentMethodVal(e.target.value)}></input>
                            <img src={visaPaymentArr[0].image} />              
                        </div> : ''}
                    </div>

                    <div>
                        {mastercardPaymentArr && mastercardPaymentArr.length !== 0 ?
                        <div className='payment-form-control'>
                            <input type='radio' value='Mastercard' checked={paymentMethodVal === 'Mastercard'} onChange={(e)=>setPaymentMethodVal(e.target.value)}></input>
                            <img src={mastercardPaymentArr[0].image} />             
                        </div> : ''}
                    </div>

                    <div>
                        {maestroPaymentArr && maestroPaymentArr.length !== 0 ?
                        <div className='payment-form-control'>
                            <input type='radio' value='Maestro' checked={paymentMethodVal === 'Maestro'} onChange={(e)=>setPaymentMethodVal(e.target.value)}></input>
                            <img src={maestroPaymentArr[0].image}/>              
                        </div> : ''}
                    </div>
                </div>
                    
           
                <div className='btn-box'>
                    <button onClick={(e)=>paymentSubmit(e)} type='button'>Choose method</button>
                </div>
            </form>
        </div>
    )
}
