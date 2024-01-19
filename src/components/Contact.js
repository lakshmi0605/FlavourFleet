import { useState, useEffect} from "react";
import Snackbar from "./SnackBar";

const Contact= () => {

   const [showSnackbar, setShowSnackbar] = useState(false);
   const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

   const handleSubmit = (e) =>{
    setShowSnackbar(true);
    setFormData({
      name: '',
      email: '',
      message: '',
    });
   }

   useEffect(() => {
    let timeout;
    if (showSnackbar) {
      timeout = setTimeout(() => {
        setShowSnackbar(false);
      }, 5000);
    }
    return () => clearTimeout(timeout);
  }, [showSnackbar]);

  return (
    <div className="mx-24 my-10">
        <h2 className="text-3xl font-bold ">Contact Us</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 text-sm font-bold my-2">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={(e)=>handleChange(e)}
              className="w-full border p-2 rounded-md"
              placeholder="John Doe"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={(e)=>handleChange(e)}
              className="w-full border p-2 rounded-md "
              placeholder="john@example.com"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={(e)=>handleChange(e)}
              rows="4"
              className="w-full border p-2 rounded-md"
              placeholder="Type your message here..."
            ></textarea>
          </div>
          <button type="button"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
            onClick={()=>handleSubmit()}
          >
            Send Message
          </button>
        </form>
        {(showSnackbar && <Snackbar />)}
      </div>
  );
};

export default Contact;
