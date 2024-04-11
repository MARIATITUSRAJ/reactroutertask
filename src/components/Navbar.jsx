import React from 'react'
import {  NavLink, useLocation } from 'react-router-dom'

const array = [{ name: 'All', link: '' },
    { name: 'Full Stack Development', link: 'fullstack' },
    { name: 'Data Science', link: 'datascience' },
    { name: 'Cyber security', link: 'cyber' },
    { name: 'Career', link: 'career' }]

const Navbar = () => {
 
  return (
      <>
        <nav className='d-flex justify-content-center'>
              <ul className='navbar-nav flex-row flex-wrap'>
                  {array.map((item,index) => <li key={index}><NavLink className={({isActive})=>isActive?'active':''} to={item.link}>{item.name}</NavLink></li>)}
                  
                
            </ul>    
        </nav>
      </>
  )
}

export default Navbar