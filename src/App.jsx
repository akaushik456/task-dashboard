import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Package from "./Package";
import './index.css'
import Data from "./Data";

function App() {

  return (
    <>
     <BrowserRouter>
       <Routes>
          <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/package" element={<Package />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/data" element={<Data />} />
          </Route>
       </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
