import { Outlet , Link } from "react-router-dom";
import { FaHome , FaInfoCircle , FaMobile , FaWolfPackBattalion} from "react-icons/fa";
import './Layout.css'

const Layout = () => {
    return(
        <>
        
         <header> 
               <div className="second">
               <div className="menu-bar">
                <div className="logo">
                  <h1> Aman Kaushik</h1>
                  <hr />
                </div>
             <nav>
                <ul className="navbar-list">
                    <li>
                       <Link to="/"><FaHome style={{fontSize:'13px', marginRight:'5px'}}/> Home </Link>
                    </li>
                    <li>
                       <Link to="/package"><FaWolfPackBattalion style={{fontSize:'13px', marginRight:'5px'}}/> Package </Link>
                    </li>
                    <li>
                       <Link to="/about"><FaInfoCircle style={{fontSize:'13px', marginRight:'5px'}}/> About </Link>
                    </li>
                    <li>
                       <Link to="/contact"><FaMobile style={{fontSize:'13px', marginRight:'5px'}}/> Contact </Link>
                    </li>
                    <li>
                       <Link to="/data"><FaMobile style={{fontSize:'13px', marginRight:'5px'}}/> Data </Link>
                    </li>
                </ul>
             </nav>
            </div>
            </div>
            </header>
         <Outlet />
        </>
    )
}

export default Layout;