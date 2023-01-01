import React from 'react'
import logo from '../resource/samplelogo.jpg'
import '../styles/CustomHeader.css'

const CustomHeader = () => {
  return (
    <div className="container-fluid header">
        <div className="container">
          <div className="row row-cols-2">
            <div className="col-1 alignment">
              <img className="image rounded" src={logo} alt="LOGO"></img>
            </div>
            <div className="col-auto alignment">
              <p className="comp-name name-space"> Atlas Law Consultancy</p>
            </div>
          </div>
          <div className="row requiredspace">
            <div className="col-auto">
              <p className="text">We Raise Our Voice For You</p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default CustomHeader