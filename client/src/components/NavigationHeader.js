import React from 'react'
import { Link } from 'react-router-dom'

const NavigationHeader = () => {
    return (
        <div>
            <Link to={'/jackets'}>Jackets</Link>
            <Link to={'/shirts'}>Shirts</Link>
            <Link to={'/accessories'}>Accessories</Link>
            <Link to={'/'}>Main Page</Link>
        </div>
    )
}

export default NavigationHeader