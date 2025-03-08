import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Login.css';

const Login = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const navigate = useNavigate(); 

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', form);
    navigate("/Dashboard");
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex' }}>
      {/* Left Section - Image */}
      <div style={{ width: '100%', position: 'relative', overflow: 'hidden' }}>
        <img src="./proifle.png" alt="Office Space" style={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'cover' }} />
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(to right, rgba(37, 99, 235, 0.8), rgba(30, 64, 175, 0.8))',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '0 48px',
          }}
        >
          <h1 style={{ fontSize: '36px', fontWeight: 'bold', color: 'white', marginBottom: '24px' }}>
            Welcome to Workspace
          </h1>
          <p style={{ fontSize: '18px', color: 'rgba(255, 255, 255, 0.9)' }}>
            Transform your work experience with our innovative platform.
          </p>
        </div>
      </div>

      {/* Right Section - Form with Animation */}
      <motion.div
        initial={{ x: "100vw", opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 80, damping: 10 }}
        style={{ width: '100%', display: 'flex', alignItems: 'center', padding: '32px', backgroundColor: '#f9fafb' }}
      >
        <div style={{ width: '100%', maxWidth: '512px', display: 'flex', flexDirection: 'column', gap: '32px' }}>
          <div style={{ textAlign: 'center' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#111827', marginBottom: '8px' }}>Create Account</h2>
            <p style={{ color: '#4b5563' }}>
              Already have an account?
              <button
                style={{ color: '#3b82f6', marginLeft: '4px', fontWeight: '500', cursor: 'pointer', border: 'none', background: 'none', padding: 0 }}
              >
                Sign in
              </button>
            </p>
          </div>

          <form onSubmit={handleSubmit} style={{ marginTop: '32px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <div>
                <label htmlFor="firstName" style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '4px' }}>
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={form.firstName}
                  onChange={handleInputChange}
                  style={{ width: '100%', padding: '8px 16px', border: '1px solid #d1d5db', borderRadius: '8px' }}
                  placeholder="John"
                />
              </div>
              <div>
                <label htmlFor="lastName" style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '4px' }}>
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={form.lastName}
                  onChange={handleInputChange}
                  style={{ width: '100%', padding: '8px 16px', border: '1px solid #d1d5db', borderRadius: '8px' }}
                  placeholder="Doe"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '4px' }}>
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleInputChange}
                style={{ width: '100%', padding: '8px 16px', border: '1px solid #d1d5db', borderRadius: '8px' }}
                placeholder="john.doe@example.com"
              />
            </div>

            <div style={{ position: 'relative' }}>
              <label htmlFor="password" style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '4px' }}>
                Password
              </label>
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                value={form.password}
                onChange={handleInputChange}
                style={{ width: '100%', padding: '8px 16px', border: '1px solid #d1d5db', borderRadius: '8px' }}
                placeholder="••••••••"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{ position: 'absolute', right: '12px', top: '32px', cursor: 'pointer', border: 'none', background: 'none' }}
              >
                {showPassword ? '🙈' : '👁️'}
              </button>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <label>
                <input type="checkbox" checked={rememberMe} onChange={() => setRememberMe(!rememberMe)} /> Remember me
              </label>
              <button type="button" style={{ color: '#3b82f6', fontWeight: '500', cursor: 'pointer', border: 'none', background: 'none' }}>
                Terms & Conditions
              </button>
            </div>

            <button type="submit" style={{ width: '100%', backgroundColor: '#3b82f6', color: 'white', padding: '12px 16px', borderRadius: '8px' }}>
              Create Account
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
