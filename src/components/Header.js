import { useSelector } from "react-redux";
import myLogo from "../images/Name in BNW.png"
import { Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Header = ()=>{

    const {loggedInUser} = useContext(UserContext);
    const cartItems = useSelector((store)=>store.cart.items)

    return (
        <header className="sticky top-0 bg-gray-50 z-50">
        <div className="flex justify-between items-center shadow">
          <div>
            <Link to="/"><img className="w-20 h-6 px-2 mx-4 md:mx-10" src={myLogo} alt="Logo" /></Link>
          </div>
          <div>
            <ul className="flex items-center p-2 m-2 md:m-4">
              <li className="px-4 md:px-6 hover:font-extrabold text-lg"><Link to="/" className="focus:text-blue-800 ">Home</Link></li>
              <li className="px-4 md:px-6 hover:font-extrabold text-lg"><Link to="/about" className="focus:text-blue-800">About</Link></li>
              <li className="px-4 md:px-6 hover:font-extrabold text-lg"><Link to="/contact" className="focus:text-blue-800">Contact</Link></li>
              <li className="px-4 md:px-6 hover:font-extrabold text-lg"><Link to="/cart" className="focus:text-blue-800">Cart ({cartItems.length})</Link></li>
              <li className="px-4 md:px-6 hover:scale-125 text-lg">
                <Link to="/user" className="focus:text-blue-800">
                  <div className="rounded-full bg-blue-900 text-white w-8 md:w-10 flex items-center justify-center">
                    {loggedInUser.firstName[0].toUpperCase()}{loggedInUser.lastName[0].toUpperCase()}
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
      )
}

export default Header;
