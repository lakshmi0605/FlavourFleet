const Footer = () =>{
    return (
       <footer className="bg-gray-800 text-white p-4 mt-auto">
            <div className="container mx-auto">
                <div className="flex items-center justify-between">
                    <div>
                        <p>&copy; 2024 Rapid Munch</p>
                    </div>
                    <div className="flex space-x-4">
                        <a href="#" className="hover:text-gray-500">Privacy Policy</a>
                        <a href="#" className="hover:text-gray-500">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;