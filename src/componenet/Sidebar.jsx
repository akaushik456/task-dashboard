import { Outlet, Link } from "react-router-dom";
import { useState } from "react";
import { FaLongArrowAltRight, FaLongArrowAltLeft, FaHome, FaInfoCircle, FaMobile, FaWolfPackBattalion } from "react-icons/fa";
import "./Layout.css";

export const CollapseWidthExample = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div style={{ display: "flex", width: "100%" }}>
      {/* Sidebar */}
      <div
        className="sidebar"
        style={{
          background: "#2b3443",
          width: collapsed ? "80px" : "350px",
          color: "#fff",
          height: "100vh",
          overflowX: "hidden",
          transition: "width 0.3s ease-in-out",
          padding: "60px 30px",
          display: "flex",
          flexDirection: "column",
          alignItems: collapsed ? "center" : "flex-start",
        }}
      >
        {!collapsed && (
          <div className="logo">
            <h1 style={{ textAlign: "center" }}>Aman Kaushik</h1>
            <hr />
          </div>
        )}

        <nav>
          <ul className="navbar-list" style={{ listStyle: "none", padding: "0", width: "100%" }}>
            <li style={{ padding: "10px 0", textAlign: "center" }}>
              <Link to="/dashboard" style={{ color: "#fff", textDecoration: "none", display: "flex", alignItems: "center" }}>
                <FaHome size={20} style={{ marginRight: collapsed ? "0px" : "10px" }} />
                {!collapsed && "Dashboard"}
              </Link>
            </li>
            <li style={{ padding: "10px 0", textAlign: "center" }}>
              <Link to="/dashboard/package" style={{ color: "#fff", textDecoration: "none", display: "flex", alignItems: "center" }}>
                <FaWolfPackBattalion size={20} style={{ marginRight: collapsed ? "0px" : "10px" }} />
                {!collapsed && "Package"}
              </Link>
            </li>
            <li style={{ padding: "10px 0", textAlign: "center" }}>
              <Link to="/dashboard/about" style={{ color: "#fff", textDecoration: "none", display: "flex", alignItems: "center" }}>
                <FaInfoCircle size={20} style={{ marginRight: collapsed ? "0px" : "10px" }} />
                {!collapsed && "About"}
              </Link>
            </li>
            <li style={{ padding: "10px 0", textAlign: "center" }}>
              <Link to="/dashboard/contact" style={{ color: "#fff", textDecoration: "none", display: "flex", alignItems: "center" }}>
                <FaMobile size={20} style={{ marginRight: collapsed ? "0px" : "10px" }} />
                {!collapsed && "Contact"}
              </Link>
            </li>
            <li style={{ padding: "10px 0", textAlign: "center" }}>
              <Link to="/dashboard/data" style={{ color: "#fff", textDecoration: "none", display: "flex", alignItems: "center" }}>
                <FaMobile size={20} style={{ marginRight: collapsed ? "0px" : "10px" }} />
                {!collapsed && "Data"}
              </Link>
            </li>
            <li style={{ padding: "10px 0", textAlign: "center" }}>
              <Link to="/dashboard/input" style={{ color: "#fff", textDecoration: "none", display: "flex", alignItems: "center" }}>
                <FaMobile size={20} style={{ marginRight: collapsed ? "0px" : "10px" }} />
                {!collapsed && "Input"}
              </Link>
            </li>
            <li style={{ padding: "10px 0", textAlign: "center" }}>
              <Link to="/dashboard/fresh" style={{ color: "#fff", textDecoration: "none", display: "flex", alignItems: "center" }}>
                <FaMobile size={20} style={{ marginRight: collapsed ? "0px" : "10px" }} />
                {!collapsed && "Fresh"}
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Toggle Button */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        style={{
          backgroundColor: "rgb(0, 123, 255)",
          color: "#fff",
          border: "none",
          padding: "10px 10px",
          borderRadius: "5px",
          position: "absolute",
          bottom: "0",
          left: "20px",
          cursor: "pointer",
          marginBottom: "10px",
        }}
      >
        {collapsed ? <FaLongArrowAltRight size={20} /> : <FaLongArrowAltLeft size={20} />}
      </button>

      {/* Content Section */}
      <div style={{ flex: 1, transition: "margin-left 0.3s ease-in-out" }}>
        <Outlet />
      </div>
    </div>
  );
};

export default CollapseWidthExample;
