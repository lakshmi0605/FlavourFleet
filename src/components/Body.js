import { MENU_API
 } from "../../utils/constants";
 import RestaurantCard from "./RestaurantCard";
const Body = () => {
    return (<div>
        <div>
        <input className="border border-black m-8 p-1" />
        <button className="bg-green-200 m-2 p-2 rounded-md" >Search</button>
        <button className="bg-gray-200 m-4 p-2 rounded-md" >Top Rated Restaurants</button>
        </div>
        <div className="flex flex-wrap"> 
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
        </div>
        
    </div>)
}

export default Body;