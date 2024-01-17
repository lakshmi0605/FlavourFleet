const Contact= () => {
  return (
    <div className="mx-24 my-10">
        <h2 className="text-3xl font-bold ">Contact Us</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
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
              rows="4"
              className="w-full border p-2 rounded-md"
              placeholder="Type your message here..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Send Message
          </button>
        </form>
      </div>
  );
};

export default Contact;
