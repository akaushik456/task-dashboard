import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
  const [form, setForm] = useState({ fn: '', ln: '', em: '', ps: '' });

  const updateChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const clickSubmit = () => {
    if (!form.fn || !form.ln || !form.em || !form.ps) {
      alert("All fields are required!");
      return;
    }
    console.log("Submitted Data:", form);
  };

  return (
    <div className="form-page">
      <div className="form-img">
        <img src="/gaming.jpg" alt="Gaming" />
      </div>
      <div className="form-cont">
        <h3 style={{ fontSize: '25px' }}>Kaushik Register</h3>
        <p>
          Already have an account? <span>Login</span>
        </p>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="name-row">
            <input type="text" placeholder="First Name" onChange={updateChange} value={form.fn} name="fn" required />
            <input type="text" placeholder="Last Name" onChange={updateChange} value={form.ln} name="ln" required />
          </div>
          <input type="email" placeholder="Email" onChange={updateChange} value={form.em} name="em" required />
          <input type="password" placeholder="Password" onChange={updateChange} value={form.ps} name="ps" required />
          <p>
            <input type="checkbox" /> Remember me <span>Terms & Conditions</span>
          </p>
          <Link to="/Dashboard">
            <button className='btn btn-primary' type="button" style={{ width: '100%', fontSize: '18px' }} onClick={clickSubmit}>
              Login
            </button>
          </Link>
        </form>
        <div>
          <a href="#">Google</a>
          <a href="#">Apple</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
