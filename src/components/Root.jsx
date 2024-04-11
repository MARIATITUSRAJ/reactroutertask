import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

const Root = () => {
  return (
      <>
          <div className='container'>
          <Navbar />
              <Outlet />
              </div>
      </>
  )
}

export default Root