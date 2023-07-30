import React from 'react'
import {BsFillArrowUpSquareFill} from 'react-icons/bs'

const Footer = () => {
  return (
    <div className='footer-container'>
      <h4>Copright&#169; 2023 Automate Team. All Rights Reserved
      </h4>
      <div className='footer-up-arrow' onClick={()=>{
          window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
      }}>
        <BsFillArrowUpSquareFill/>
      </div>
    </div>
  )
}

export default Footer