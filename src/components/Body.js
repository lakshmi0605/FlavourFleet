import { RESTAURANTS_URL, CORS_URL
 } from "../../utils/constants";
 import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {

    const [resList, setResList] = useState([]);
    const [filteredResList,setFilteredResList] = useState([]);
    const [searchText, setSearchText]= useState("");
    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);


    useEffect(()=>{
        fetchData();
    },[])

    //fetching data from API
    const fetchData = async() => {
        const resData = await fetch(CORS_URL + RESTAURANTS_URL);
        const resJSONData = await resData.json();
        // console.log(resJSONData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setResList(resJSONData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredResList(resJSONData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    }

    //search filter implementation
    const filterRestaurants = () =>{
        const filteredResList = resList.filter((res) => 
        res.info.name.toLowerCase().includes(searchText.toLowerCase()));
        setFilteredResList(filteredResList);
    }

    //debouncing function
    // const debounce = (func, delay) => {
    //     let timeoutId;
    //     return function (...args) {
    //       clearTimeout(timeoutId);
    //       timeoutId = setTimeout(() => func.apply(this, args), delay);
    //     };
    //   };

    // //debounced search function
    // const debouncedSearch = debounce(filterRestaurants, 300);
    
    if(resList.length === 0){ return (<div className="flex flex-wrap"><Shimmer /> <Shimmer /> <Shimmer /> <Shimmer /> <Shimmer /> <Shimmer /> <Shimmer /> <Shimmer /> <Shimmer /> <Shimmer /></div>)};

   

    return  (<div className="mx-14">
        <div>
        <input className="border border-black m-8 p-1 rounded" value={searchText} onChange={(e) => {
            setSearchText(e.target.value);
            //filterRestaurants();
        }} onKeyDown={(event)=>{if(event.key === "Enter"){filterRestaurants();}}}/>
        <button className="bg-green-200 m-2 p-2 rounded-md" onClick={filterRestaurants}>Search</button>
        <button className="bg-gray-200 m-4 p-2 rounded-md" >Top Rated Restaurants</button>
        </div>
        <div className="flex flex-wrap items-stretch "> 
        {filteredResList.map((res)=> 
       (
            <Link to={"/restaurants/" + res?.info?.id} key={res?.info?.id}>
                <div>
                {res?.info?.avgRating >=4.5 ? (<RestaurantCardPromoted resData={res}/>) : (<RestaurantCard resData={res} />)}
                </div>
                 </Link>
        ))}
        
        </div>
        
    </div>)
}

export default Body;