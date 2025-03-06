import React from 'react'
import './About.css'
import { FaSearch, FaUser, FaCog, FaBell } from 'react-icons/fa'

function exportData (
  name,
  age,
  subject,
  school
) {
  return {name , age , subject , school};
}

const rows = [
  exportData('aman' , 24 , 'Maths' , 'Greenland Public School'),
  exportData('neeraj' , 29 , 'Maths' , 'Land Public School'),
  exportData('ashu' , 100 , 'English' , 'public school')
]

function acessTable () {
 
    return (
       <>
         <div className="right-mam">
          <div className="container">
              <div className="container-row">
                  <div className="first-container">
                  <h1>Dashboard/Aman</h1>
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
  
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>School</th>
                <th>Subject</th>
              </tr>
            </thead>
            <tbody>
              
              {rows.map((row) => (
                <tr key={row.name}>
                <td>{row.name}</td>
                <td>{row.age}</td>
                <td>{row.school}</td>
                <td>{row.subject}</td>
              </tr>
            
              ))}
  
            </tbody>
          </table>
        </div>
        </div>
      </>
    )
}

export default acessTable