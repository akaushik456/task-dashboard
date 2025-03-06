import React, { use, useEffect, useState } from 'react'
import { FaSearch,FaUser,FaCog,FaBell, } from 'react-icons/fa'
import Table from './componenet/Table'
import './Package.css'

const Package = () => {



    return(
        <React.Fragment>
             <div className="right-mam">
        <div className="container">
                    <div className="container-row">
                        <div className="first-container">
                        <h1>Package/Aman</h1>
                        </div>
                        <div className="second-container">
                            <div className="profile-icons">
                            <div className="input-search">
                                
                        <FaSearch className='search-icon'/><input type="search" placeholder="Type here..." id="search" className='search' size={15}/>
                        </div>
                        <FaUser size={15}/><span style={{fontSize:'14px' , cursor:'pointer'}}>Logout</span>
                        <FaCog size={15} style={{marginLeft:'15px' , cursor:'pointer'}}/>
                        <FaBell size={15} style={{marginLeft:'15px' , cursor:'pointer'}}/>
                        </div>
                    </div>
                    </div>

            <section>
               <Table />    
            </section>    

        </div>            
        </div> 
        </React.Fragment>
    )
}
export default Package;