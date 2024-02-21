import './Menubar.css'
import{ useState } from 'react' 
import {Link, NavLink} from 'react-router-dom'
import Logo from '../images/mainlogo.png'
import {links} from '../data'
import { FaBars } from "react-icons/fa6";
import {MdOutlineClose} from "react-icons/md"
const Menubar = () => {
     const [isNavShowing,setisNavShowing] = useState(false);
  return (
    <nav>
        <div className="container nav_container">
               <Link to ="/" className='logo' onClick={() => setisNavShowing(false)}>  
               <img src={Logo} alt="Nav Logo"  />
               </Link>

               <ul className={`nav_links ${isNavShowing ? 'showNav':'hideNav'}`}>
                {
                    links.map(({name,path},index)=>{
                        return (
                            <li key={index}>
                                <NavLink to ={path} className={({isActive})=>isActive ? 'active-nav':''
                            }onClick={() => setisNavShowing(prev => !prev)}>{name}</NavLink>
                            </li>
                        )
                    })
                }
               </ul>
               <button className="nav__togglebtn" onClick={() => setisNavShowing(prev => !prev)}>
                {
                    isNavShowing ? <MdOutlineClose/>: <FaBars/>
                }
               </button>
        </div>
    </nav>
  )
}

export default Menubar