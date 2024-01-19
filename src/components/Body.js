import { RESTAURANTS_URL, CORS_URL
 } from "../utils/constants";
 import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useRestaurantList from "../utils/useRestaurantList";

const Body = () => {

    // const [resList, setResList] = useState([]);
    // const [filteredResList,setFilteredResList] = useState([]);
    const [searchText, setSearchText]= useState("");
    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

    const resList = useRestaurantList();

    //search filter implementation
    const filteredRestaurants = resList.filter((res) => 
        res.info.name.toLowerCase().includes(searchText.toLowerCase()));
    

    return  resList.length === 0 ? ((<div className="flex flex-wrap"><Shimmer /> <Shimmer /> <Shimmer /> <Shimmer /> <Shimmer /> <Shimmer /> <Shimmer /> <Shimmer /> <Shimmer /> <Shimmer /></div>)) :(<div className="mx-4 md:mx-14">
    <div className="text-center m-6 md:m-10">
      <h1 className="font-bold text-5xl md:text-9xl text-blue-950"><span className="tracking-[-0.1em]">RAPID  </span> <span className="tracking-[-0.13em]">MUNCH</span></h1>
      <h3 className="text-xl md:text-3xl">Flavor on the fly!</h3>
  
      <input
        type="text"
        placeholder="Search Restaurants"
        className="w-full md:w-1/2 h-12 p-4 mt-4 rounded-2xl border-2 border-gray-300 focus:outline-none focus:border-blue-500"
        value={searchText}
        onChange={(e) => { setSearchText(e.target.value);}}
      />
    </div> 
    <div className="flex flex-wrap items-stretch justify-center">
      {filteredRestaurants.map((res) => (
        <Link to={"/restaurants/" + res?.info?.id} key={res?.info?.id}>
          <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-2">
            {res?.info?.avgRating >= 4.5 ? (<RestaurantCardPromoted resData={res} />) : (<RestaurantCard resData={res} />)}
          </div>
        </Link>
      ))}
    </div>
  </div>
  )
}

export default Body;