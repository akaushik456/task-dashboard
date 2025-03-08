import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Login from "./componenet/Login";
import Dashboard from "./Dashboard";
import About from "./About";
import Contact from "./Contact";
import Package from "./Package";
import Data from "./Data";
import Input from "./componenet/Input";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/dashboard" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="package" element={<Package />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="data" element={<Data />} />
          <Route path="input" element={<Input />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
