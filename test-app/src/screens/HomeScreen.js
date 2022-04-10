import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {listProducts } from '../redux/actions/productActions'
import { getStaticData } from '../redux/actions/footerActions';

import Slider from '../components/js/Slider';
import Trending from '../components/js/Trending';
import Discount from '../components/js/Discount';
import Exclusive from '../components/js/Exclusive';
import Feedback from '../components/js/Feedback';

import '../components/css/Utilities.css'
import '../components/css/Trending.css'

import { ACTIVATE_SEARCH } from '../redux/types/searchTypes';


export default function HomeScreen() {

    const dispatch = useDispatch()

    const productList = useSelector((state) => state.productList)
    const {loading, products, exclusive, exclusive_image, error} = productList

    const statics = useSelector((state) => state.statics)
    const {staticData, success} = statics
   
    useEffect(()=>{
        
        dispatch({
            type: ACTIVATE_SEARCH,
        })

        /* fetchProductList returns a function action and is passed to dispatch */
        dispatch(listProducts())
        dispatch(getStaticData()) 
    },[dispatch])

  
    return (

        <div>
            {staticData && Object.keys(staticData).length !== 0 && ("cover" in staticData) && ("icon" in staticData) && <Slider staticData={staticData} success={success}/>}
            {/* <Slider staticData={staticData} success={success}/> */}
            {loading === false && products.length > 0 ? <Trending products={products}/> : ''}

            {loading === false && products.length > 0 ? <Discount products={products}/> : ''}

            {loading === false && products.length > 0 ? <Exclusive exclusive={exclusive} exclusive_image={exclusive_image}/> : ''}

            {staticData && Object.keys(staticData).length != 0 ? <Feedback staticData={staticData}/> : ''}
        </div>
    )
}
