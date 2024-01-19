import { useSelector } from "react-redux";
import myLogo from "../images/Logo.png"
import { Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../utils/userContext";

const Header = ()=>{

    const {loggedInUser} = useContext(UserContext);
    const cartItems = useSelector((store)=>store.cart.items)

    return (
        <header className="sticky top-0 bg-gray-50 z-50">
        <div className="flex justify-between items-center shadow p-2 md:p-4">
          <div>
            <Link to="/"><img className="w-24 md:w-32 p-2 mx-4 md:mx-10" src={myLogo} alt="Logo" /></Link>
          </div>
          <div>
            <ul className="flex items-center p-2 m-2 md:m-4">
              <li className="p-4 md:p-6 hover:scale-125 text-lg"><Link to="/" className="focus:text-blue-800">Home</Link></li>
              <li className="p-4 md:p-6 hover:scale-125 text-lg"><Link to="/about" className="focus:text-blue-800">About</Link></li>
              <li className="p-4 md:p-6 hover:scale-125 text-lg"><Link to="/contact" className="focus:text-blue-800">Contact</Link></li>
              <li className="p-4 md:p-6 hover:scale-125 text-lg"><Link to="/cart" className="focus:text-blue-800">Cart ({cartItems.length})</Link></li>
              <li className="p-4 md:p-6 hover:scale-125 text-lg">
                <Link to="/user" className="focus:text-blue-800">
                  <div className="rounded-full bg-blue-900 text-white w-8 md:w-10 h-8 md:h-10 flex items-center justify-center">
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