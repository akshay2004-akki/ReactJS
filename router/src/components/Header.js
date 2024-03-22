import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <>
        <NavLink to="/about" className={({isActive})=>`${isActive ? "text-orange-700" : "text-grey-700"}`}>
          About
        </NavLink>
        <NavLink to="/contact" className={({isActive})=>`${isActive ? "text-orange-700" : "text-grey-700"}`}>
          Contact
        </NavLink>
        <NavLink to="/user" className={({isActive})=>`${isActive ? "text-orange-700" : "text-grey-700"}`}>
          User
        </NavLink>
        <NavLink to="/github" className={({isActive})=>`${isActive ? "text-orange-700" : "text-grey-700"}`}>
          Github
        </NavLink>
    </>
  )
}

export default Header