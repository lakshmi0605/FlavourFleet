import ceo_image from "../images/CEO.png";
import team_image from "../images/Team.jpeg";
const About = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Section 1: Text to the left, Image to the right */}
      <div className="container mx-auto p-8 flex items-center">
        <div className="flex-1 pr-8">
          <h2 className="text-3xl font-bold mb-4">Our Story</h2>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget tincidunt quam. Duis euismod neque eu eleifend feugiat.
            Lorem ipsum 
          </p>
        </div>
        <div className="flex-1">
          <img
            src={ceo_image}
            alt="CEO Image"
            className="object-cover w-full h-full rounded-md"
          />
        </div>
      </div>

      {/* Section 2: Image to the left, Text to the right */}
      <div className="container mx-auto p-8 flex items-center bg-gray-200">
        <div className="flex-1">
          <img
            src={team_image}
            alt="Team Image"
            className="object-cover w-full h-full rounded-md"
          />
        </div>
        <div className="flex-1 pl-8">
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-700">
            Quisque eget urna nec dolor vehicula tincidunt ac quis justo. Sed eu massa id mauris laoreet sagittis. Quisque eget urna nec dolor vehicula tincidunt ac quis justo. Sed eu massa id mauris laoreet sagittis.
          </p>
        </div>
      </div>

      {/* Section 3: Testimonials */}
      <div className="container mx-auto p-8">
        <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-white p-6 rounded-md shadow-md">
            <p className="text-gray-700">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent
              libero. Sed cursus ante dapibus diam. Sed nisi."
            </p>
            <p className="text-gray-600 mt-4">- John Doe</p>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white p-6 rounded-md shadow-md">
            <p className="text-gray-700">
              "Curabitur ut nulla sed massa ultrices venenatis. Mauris tempus urna eget arcu
              rhoncus, vitae varius enim scelerisque."
            </p>
            <p className="text-gray-600 mt-4">- Jane Smith</p>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-white p-6 rounded-md shadow-md">
            <p className="text-gray-700">
              "Vivamus at augue eget arcu dictum varius duis at consectetur lorem. Pellentesque nec
              felis vel purus auctor venenatis."
            </p>
            <p className="text-gray-600 mt-4">- Alex Johnson</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
