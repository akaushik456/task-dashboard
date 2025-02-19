import React, { useEffect, useState } from 'react'
import { FaSearch, FaUser, FaCog, FaBell } from 'react-icons/fa'



const Data = () => {

    const [users, setUSers] = useState([]);

    const fetchUsers = async () => {
        try {
            const res = await fetch( "https://fakestoreapi.com/products");
            const data = await res.json();
            if (data.length = 8) {
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
    }, [])
    return (
        <>
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

                <table>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>category</th>
                            <th>title</th>
                            <th>price</th>
                            <th>count</th>
                            <th>rate</th>
                        </tr>
                    </thead>
                    <tbody>

                        {users.map((row) => {
                            // const { id, category, title , price }= row;
                            return(
                                <tr key={row.name}>
                                    <td >{row.id}</td>
                                    <td>{row.category}</td>
                                    <td>{row.title}</td>
                                    <td>{row.price}</td>
                                    <td>{row.rating?.count ?? "N/A"}</td>
                                    <td>{row.rating?.rate ?? "N/A"}</td>
                                </tr>
                            )
                    } )
                }

                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Data