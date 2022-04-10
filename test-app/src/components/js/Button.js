import '../css/Button.css'
import React from 'react'

export default function Button({children, clickHandler}) {

    return (
        <button onClick={clickHandler} className='btn'>{children}</button>
    )
}
