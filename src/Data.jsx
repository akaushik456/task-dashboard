import React, { useEffect, useState } from 'react'
import { FaSearch, FaUser, FaCog, FaBell , FaEdit , FaTrash} from 'react-icons/fa'
import './index.css'
import { data } from 'react-router-dom';


const Data = () => {

    const [users, setUSers] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchUsers = async () => {
        try {
            const res = await fetch("https://fakestoreapi.com/products");
            const data = await res.json();
            if (data.length > 0) {
                setUSers(data);
            }
            console.log(data);
        } catch (e) {
            console.log(e)
        }
    }


    // fetchProducts(API);
    useEffect(() => {
        fetchUsers()

        .finally(() => {
            setLoading(false);
        })
    }, [])

    function aman(id) {
       const setData = users.filter(td => td.id !== id)
        setUSers(setData)
    }

    function edits(id) {
        const setData = users.filter(td => td.id !== id)
        setUSers(setData)
    }
    return (
        <>
        <div className='right-mam'>
        <div className="container">
                <div className="container-row">
                    <div className="first-container">
                        <h1>Dashboard/Aman</h1>
                    </div>
                    <div className="second-container">
                        <div className="profile-icons">
                            <div className="input-search">

                                <FaSearch className='search-icon' /><input type="search" placeholder="Type here..." id="search" className='search' size={15} />
                            </div>
                            <FaUser size={15} /><span style={{ fontSize: '14px', cursor: 'pointer' }}>Logout</span>
                            <FaCog size={15} style={{ marginLeft: '15px', cursor: 'pointer' }} />
                            <FaBell size={15} style={{ marginLeft: '15px', cursor: 'pointer' }} />
                        </div>
                    </div>
                </div>

                {loading ? (
                    <div style={{fontSize:'30px' , color:'#fff'}}>Loading...</div>
                ) : (
                    <div className='scroll' style={{}}>
                    <table>
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>category</th>
                                <th>title</th>
                                <th>price</th>
                                <th>count</th>
                                <th>rate</th>
                                <th>image</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>

                            {users.map((row) => {
                                // const { id, category, title , price }= row;
                                return (
                                    <tr key={row.name}>
                                        <td >{row.id}</td>
                                        <td>{row.category}</td>
                                        <td>{row.title}</td>
                                        <td>{row.price}</td>
                                        <td>{row.rating?.count ?? "N/A"}</td>
                                        <td>{row.rating?.rate ?? "N/A"}</td>
                                        <td><img src={row.image} style={{width:'50px', minHeight:'50px' , objectFit:'contain'}}/></td>
                                        <td><FaEdit  style={{marginLeft:'10px' , cursor:'pointer'}} onClick={() => edits(row.id)}/></td>
                                        <td><FaTrash  style={{marginLeft:'20px' , cursor:'pointer'}} onClick={() => aman(row.id)}/></td>
                                    </tr>
                                )
                            })
                            }

                        </tbody>
                    </table>
                    </div>
                )}


            </div>
        </div>
            
        </>
    )
}

export default Data