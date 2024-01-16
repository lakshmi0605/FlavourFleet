import { MENU_API, CORS_URL
 } from "../../utils/constants";
 import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {

    const [resList, setResList] = useState([]);
    const [filteredResList,setFilteredResList] = useState([]);
    const [searchText, setSearchText]= useState("")

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async() => {
        const resData = await fetch(CORS_URL + MENU_API);
        const resJSONData = await resData.json();
        // console.log(resJSONData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setResList(resJSONData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredResList(resJSONData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    }

    const filterRestaurants = () =>{
        const filteredResList = resList.filter((res) => 
        res.info.name.toLowerCase().includes(searchText.toLowerCase()));
        setFilteredResList(filteredResList);
    }
    if(resList.length === 0){ return (<div className="flex flex-wrap"><Shimmer /> <Shimmer /> <Shimmer /> <Shimmer /> <Shimmer /> <Shimmer /> <Shimmer /> <Shimmer /> <Shimmer /> <Shimmer /></div>)};

    return  (<div>
        <div>
        <input className="border border-black m-8 p-1" value={searchText} onChange={(e) => setSearchText(e.target.value)} onKeyDown={(event)=>{if(event.key === "Enter"){filterRestaurants();}}}/>
        <button className="bg-green-200 m-2 p-2 rounded-md" onClick={filterRestaurants}>Search</button>
        <button className="bg-gray-200 m-4 p-2 rounded-md" >Top Rated Restaurants</button>
        </div>
        <div className="flex flex-wrap"> 
        {filteredResList.map((res)=> <RestaurantCard key={res.info.id} resData={res} />)}
        </div>
        
    </div>)
}

export default Body;