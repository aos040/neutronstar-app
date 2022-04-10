import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

import SearchBar from './SearchBar'
import { logout } from '../../redux/actions/userActions'

import '../css/Navbar.css' 
import '../css/Utilities.css' 


function Navbar() {

    const productList = useSelector((state) => state.productList)
    const {products} = productList

    const userLogin = useSelector(state => state.userLogin)
    const {userData} = userLogin

    const cart = useSelector((state) => state.cart)
    const numitems = cart.cartItems.length

    const [active, setActive] = useState(false)

    const dispatch = useDispatch()
    const history = useNavigate()

    const search = useSelector((state) => state.search)
    
    const handleLogout = (e) =>{
        e.preventDefault()
        dispatch(logout())
        history('/')
    }
    
    return (
        <nav className='nav-container'>
            {/* Logo */}
            <Link to='/' className='logo'>
                <div className='circle'><i class="fa-solid fa-bahai"></i></div>
                <span className='companyname'>NeutronStar</span>
            </Link>

            {search.isActive && products.length > 0 ? <SearchBar placeholder='What are you looking for?' data={products}/> : ''}
            
            {/* Menu */}

            {userData && Object.keys(userData).length != 0 ? 
                <ul className='menu-container'>
                    
                    <li className='display-profile'> 
                        <Link to='#' className='menu-links' onClick={()=>setActive(!active)}> {userData.first_name} 
                            {active === false ? <i class="fa-solid fa-caret-down log"></i> : <i class="fa-solid fa-caret-up log"></i>}
                        </Link> 
                        {active && <div className='dropdown hide'>
                            {userData.is_staff && <small><Link className='dropdown-links' to='/admin/products/'>Products</Link></small>}
                            {userData.is_staff && userData.email === 'abdimalik551@gmail.com' && <small><Link className='dropdown-links' to='/admin/upload/'>Upload</Link></small>}
                            <small><Link className='dropdown-links' to='/'>Profile</Link></small>
                            <small><Link onClick={handleLogout} className='dropdown-links' to='/'>Logout</Link></small>
                        </div>}
                    </li>

                    {/* <li> 
                        <Link onClick={handleLogout} to='/' className='menu-links' href='#'> Logout 
                            <i class="fa-solid fa-person-walking-arrow-right log"></i>
                        </Link> 
                    </li> */}
                    <li> <Link to='/cart' className='menu-links cart-link' href='#'>Cart <i class="fa-solid fa-cart-arrow-down cartt"></i> <i className='numitems'>{numitems}</i></Link> </li>
                </ul>
                :
                <ul className='menu-container'>

                    <li> 
                        <Link to='/login' className='menu-links' href='#'>Login
                            <i class="fa-solid fa-arrow-right-to-bracket log"></i>
                        </Link> 
                    </li>
                    <li> <Link to='/cart' className='menu-links cart-link' href='#'>Cart <i class="fa-solid fa-cart-arrow-down cartt"></i> <i className='numitems'>{numitems}</i></Link> </li>
                </ul>
            }

        </nav>
    )

}

export default Navbar;