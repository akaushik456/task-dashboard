import React from 'react';
import { FaMoneyBill , FaNetworkWired , FaHandPaper , FaOpencart} from "react-icons/fa";
import './Fourdiv.css';

function Fourdiv() {
  return (
     <React.Fragment>
        <div className="four-cards">
            <div className="cards">
                <div className="inner-card">
                    <span style={{color:'#bbb' , fontSize:'12px'}}>Today's Moneys</span>
                    <p>$53,000<span style={{color:'green', fontSize:'12px'}}>+55%</span></p>
                </div>        
                   <div className='cam'><FaMoneyBill /></div>
                
            </div>
            <div className="cards">
            <div className="inner-card">
                    <span style={{color:'#bbb' , fontSize:'12px'}}>Today's Users</span>
                    <p>2,300<span style={{color:'green', fontSize:'12px'}}>+5%</span></p>
                </div>        
                   <div className='cam'><FaNetworkWired /></div>
            </div>
            <div className="cards">
            <div className="inner-card">
                    <span style={{color:'#bbb' , fontSize:'12px'}}>New Clients</span>
                    <p>+53,000<span style={{color:'red', fontSize:'12px'}}>-14%</span></p>
                </div>        
                   <div className='cam'><FaHandPaper /></div>
            </div>
            <div className="cards">
            <div className="inner-card">
                    <span style={{color:'#bbb' , fontSize:'12px'}}>Total Sales</span>
                    <p>$173,000<span style={{color:'green', fontSize:'12px'}}>+8%</span></p>
                </div>        
                   <div className='cam'><FaOpencart /></div>
            </div>
            </div>
     </React.Fragment>
  )
}

export default Fourdiv