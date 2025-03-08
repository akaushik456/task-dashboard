import React, { useEffect, useState } from 'react';
import { FaSearch, FaUser, FaCog, FaBell, FaEdit, FaTrash, FaCheck, FaLongArrowAltRight, FaLongArrowAltLeft } from 'react-icons/fa';
import './index.css';
import { ul } from 'framer-motion/client';

const Data = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [editId, setEditId] = useState(null);
    const [editedData, setEditedData] = useState({});
    const [currentPage , setCurrent] = useState(1);
    const recordPerPage = 8;
    const lastIndex = currentPage * recordPerPage;
    const firstIndex = lastIndex - recordPerPage;
    const records = users.slice(firstIndex , lastIndex);
    const npage = Math.ceil(users.length / recordPerPage);
    const numbers = Array.from({length: npage}, (_, i) => i + 1);

   
        fetch("https://fakestoreapi.com/products")
            .then(res => res.json())
            .then(data => setUsers(data))
            .catch(error => console.log(error))
            .finally(() => setLoading(false));
            useEffect(() => {
                setLoading(true);
    }, []);

    const handleDelete = (id) => {
        setUsers(users.filter(user => user.id !== id));
    };

    const handleEdit = (user) => {
        setEditId(user.id);
        setEditedData({ ...user });
    };

    const handleChange = (e, field) => {
        setEditedData({ ...editedData, [field]: e.target.value });
    };

    const handleUpdate = () => {
        setUsers(users.map(user => (user.id === editId ? editedData : user)));
        setEditId(null);
    };

    const perPage = () => {
        if(currentPage > 1) {
            setCurrent(currentPage - 1)
        }
    }
    
    const changeCpage = (n) => {
        setCurrent(n)
    }
    
    const nextPage = () => {
        if(currentPage < npage) {
            setCurrent(currentPage + 1)
        }
    
    }

    return (
        <div className='right-mam'>
            <div className="container">
                <div className="container-row">
                    <div className="first-container">
                        <h1>Dashboard/Aman</h1>
                    </div>
                    <div className="second-container">
                        <div className="profile-icons">
                            <div className="input-search">
                                <FaSearch className='search-icon' /><input type="search" placeholder="Type here..." className='search' size={15} />
                            </div>
                            <FaUser size={15} /><span style={{ fontSize: '14px', cursor: 'pointer' }}>Logout</span>
                            <FaCog size={15} style={{ marginLeft: '15px', cursor: 'pointer' }} />
                            <FaBell size={15} style={{ marginLeft: '15px', cursor: 'pointer' }} />
                        </div>
                    </div>
                </div>

                {loading ? (
                    <div style={{ fontSize: '30px', color: '#fff' }}>Loading...</div>
                ) : (
                    <div>
                        <table>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Category</th>
                                    <th>Title</th>
                                    <th>Price</th>
                                    <th>Count</th>
                                    <th>Rate</th>
                                    <th>Image</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {records.map((user) => (
                                    <tr key={user.id}>
                                        <td>{user.id}</td>
                                        <td>
                                            {editId === user.id ? (
                                                <input value={editedData.category} onChange={(e) => handleChange(e, 'category')} />
                                            ) : (
                                                user.category
                                            )}
                                        </td>
                                        <td>
                                            {editId === user.id ? (
                                                <input value={editedData.title} onChange={(e) => handleChange(e, 'title')} />
                                            ) : (
                                                user.title
                                            )}
                                        </td>
                                        <td>
                                            {editId === user.id ? (
                                                <input value={editedData.price} onChange={(e) => handleChange(e, 'price')} />
                                            ) : (
                                                user.price
                                            )}
                                        </td>
                                        <td>{user.rating?.count ?? "N/A"}</td>
                                        <td>{user.rating?.rate ?? "N/A"}</td>
                                        <td><img src={user.image} style={{ width: '50px', height: '50px', objectFit: 'contain' }} /></td>
                                        <td>
                                            {editId === user.id ? (
                                                <FaCheck style={{ cursor: 'pointer', marginLeft: '10px' }} onClick={handleUpdate} />
                                            ) : (
                                                <FaEdit style={{ cursor: 'pointer', marginLeft: '10px' }} onClick={() => handleEdit(user)} />
                                            )}
                                            <FaTrash style={{ cursor: 'pointer', marginLeft: '10px' }} onClick={() => handleDelete(user.id)} />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <nav>
                            <ul style={styles.ul}>
                                <li style={styles.li}>
                                    <a href="#" onClick={perPage}><FaLongArrowAltLeft /></a>
                                </li>
                                {
                                    numbers.map((n, i) => (
                                        <li style={styles.li} className={`page-item ${currentPage === n ? 'active' : ''}`} key={i}>
                                            <a href="#" onClick={() => changeCpage(n)} style={{color:'red'}}>{n}</a>
                                        </li>
                                    ))
                                }
                                  <li style={styles.li}>
                                    <a href="#" onClick={nextPage}><FaLongArrowAltRight /></a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                )}
            </div>
        </div>
    );
};

const styles ={ 
    ul: {display:'flex' , justifyContent:'end'},
    li: {marginRight:'20px'}
}

export default Data;
