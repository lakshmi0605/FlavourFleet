import myLogo from "../images/Logo.png"
import { Link } from "react-router-dom";

const Header = ()=>{
    return (<div className="flex justify-between">
        <div> 
        <Link to="/" ><img className="w-32 p-2 mx-10" src={myLogo} alt="Logo" /></Link>
        </div>
        <div >
            <ul className="flex items-center p-2 m-4">
                <li className="p-6 font-bold text-lg"><Link to="/" >Home</Link></li>
                <li className="p-6 font-bold text-lg"><Link to="/about" >About</Link></li>
                <li className="p-6 font-bold text-lg"><Link to="/contact" >Contact</Link></li>
                <li className="p-6 font-bold text-lg"><Link to="/user" >Login</Link></li>
            </ul>
        </div>
        
    </div>)
}

export default Header;