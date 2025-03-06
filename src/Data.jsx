import React, { useEffect, useState } from 'react';
import { FaSearch, FaUser, FaCog, FaBell, FaEdit, FaTrash, FaCheck } from 'react-icons/fa';
import './index.css';

const Data = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [editId, setEditId] = useState(null);
    const [editedData, setEditedData] = useState({});

    useEffect(() => {
        setLoading(true);
        fetch("https://fakestoreapi.com/products")
            .then(res => res.json())
            .then(data => setUsers(data))
            .catch(error => console.log(error))
            .finally(() => setLoading(false));
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
                    <div className='scroll'>
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
                                {users.map((user) => (
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
                    </div>
                )}
            </div>
        </div>
    );
};

export default Data;
