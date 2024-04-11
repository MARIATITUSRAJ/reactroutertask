import React from 'react'
import { useNavigate } from 'react-router-dom'

const NoMatch = () => {
    const navigate = useNavigate();

    const goBackHandler = () => {
        navigate('/');
        
    }
  return (
      <>
          <div className='container text-center'>
            <h1>404 - Page Not Found</h1>
              <p>Sorry, the page you are looking for could not be found.</p>
              <button onClick={goBackHandler} className='btn btn-success'>Go to home</button>
            </div> 
      </>
  )
}

export default NoMatch