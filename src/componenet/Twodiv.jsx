import React from 'react'
import { ThunderboltOutlined } from "@ant-design/icons";
import { FaLongArrowAltRight } from "react-icons/fa"
import './Two.css'

function Twodiv() {
  return (
    <div className='two-div'>
      <div className='dev-div'>
        <div className='left-div'>
          <span style={{ fontSize: '13px', color: '#bbb' }}>Built By Developers</span>
          <h3>Purity UI Dashboard</h3>
          <p>From colors, cards, typography to complex elements, you will find the full documentation.</p>

          <div className="down-btn">
            <a href="#">Read More </a> <FaLongArrowAltRight />
          </div>
        </div>
        <div className="right-dev">

          <div className='thunder-icon'> <ThunderboltOutlined className='thund-icon' /></div><span style={{ fontSize: '25px', fontWeight: '500' }}>chakra</span>

        </div>
      </div>

      <div className="image-dev">
        <img src="./it-sector.jpg" alt="It Sector" />
        <div className='image-content'>
          <h3 style={{fontSize:'20px', fontWeight:'600'}}>Work with the rockets</h3>
          <p style={{fontSize:'13px'}}>Harness the power of a lightning bolt to spark your creativity.Launch your ambitions like rockets.</p>

          <div className="down-btn">
            <a href="#">Read More </a> <FaLongArrowAltRight />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Twodiv