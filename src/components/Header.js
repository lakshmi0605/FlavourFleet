import myLogo from "../images/Logo.png"

const Header = ()=>{
    return (<div className="flex justify-between shadow-md">
        <div> 
        <img className="w-32 p-2" src={myLogo} alt="Logo" />
        </div>
        <div >
            <ul className="flex items-center p-2 m-4">
                <li className="p-6 font-bold text-lg">Home</li>
                <li className="p-6 font-bold text-lg">About</li>
                <li className="p-6 font-bold text-lg">Contact</li>
                <li className="p-6 font-bold text-lg">Login</li>
            </ul>
        </div>
        
    </div>)
}

export default Header;