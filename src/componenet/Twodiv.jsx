import React from 'react'
import './Two.css'

function Twodiv() {
  return (
    <div className='two-div'>
      <div className='dev-div'>
        <div className='left-div'>
          <span style={{fontSize:'13px', color:'#bbb'}}>Built By Developers</span>
            <h3>Purity UI Dashboard</h3>
            <p>From colors, cards, typography to complex elements, you will find the full documentation.</p>
            
            <div className="down-btn">
                <a href="#">Read More</a>
            </div>
        </div>
        <div>
            <div className="right-dev"></div>
        </div>
      </div>
    </div>
  )
}

export default Twodiv