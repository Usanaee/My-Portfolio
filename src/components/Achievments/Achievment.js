import React from 'react'
import './Achievment.css'

function Achievment({number,tagline}) {
  return (
    <div>
        <div className="achievment">
            <div className="circle">
              <h1>{number}</h1>
            </div>
            <p>{tagline}</p>
          </div>
    </div>
  )
}

export default Achievment