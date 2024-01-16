const Shimmer = () => {
    return (
        <div className="w-[250px] bg-white shadow-md rounded-md overflow-hidden mx-2 my-4">
            {/* Shimmer effect for image */}
            <div className="bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 animate-pulse h-40 w-full"></div>

            <div className="p-4">
                {/* Shimmer effect for restaurant name */}
                <div className="bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 animate-pulse h-6 w-3/4 mb-4"></div>

                {/* Shimmer effect for restaurant description */}
                <div className="bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 animate-pulse h-4 w-1/2 mb-2"></div>

                {/* Shimmer effect for other details like location, rating, etc. */}
                <div className="bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 animate-pulse h-4 w-1/3"></div>
            </div>
        </div>
    );
};

export default Shimmer;
