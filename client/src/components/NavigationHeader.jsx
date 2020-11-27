import React from 'react'
import { NavLink } from 'react-router-dom'

const NavigationHeader = () => {
    return (
        <div className="App-header">
            <div style={{margin:10}}><NavLink to={'/'} style={{ textDecoration: 'none', fontWeight: "bold" }} exact activeClassName="activeLink">Main Page</NavLink></div>
            <div style={{margin:10}}><NavLink to={'/jackets'} style={{ textDecoration: 'none', fontWeight: "bold" }} activeClassName="activeLink">Jackets</NavLink></div>
            <div style={{margin:10}}><NavLink to={'/shirts'} style={{ textDecoration: 'none', fontWeight: "bold" }} activeClassName="activeLink">Shirts</NavLink></div>
            <div style={{margin:10}}><NavLink to={'/accessories'} style={{ textDecoration: 'none', fontWeight: "bold" }} activeClassName="activeLink">Accessories</NavLink></div>
        </div>
    )
}

export default NavigationHeader