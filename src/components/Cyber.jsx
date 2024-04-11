import React from 'react'
import { Link } from 'react-router-dom'

const Cyber = ({data}) => {
    const cyber = data.filter((item) => item.field === 'cybersecurity')
  return (
      <>
          <div className="row">
          {cyber.map((item) => 
              <div key={item.id} className='col-12 col-md-6 col-lg-4 mb-4'>
  <div className="card h-100">
    <img src={item.img} className="card-img-top" alt="..."/>
    <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.desc}</p>
                  <Link className='read-more'>Read More »</Link>
    </div>
    <div className="card-footer">
      <small className="text-body-secondary">{item.date}</small>
      <small className="text-body-secondary">{item.comment}</small>
    </div>
            </div>
              </div>
              
              )} 
              </div>
      </>
  )
}

export default Cyber