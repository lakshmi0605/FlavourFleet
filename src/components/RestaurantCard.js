import { RESIMG_URL } from "../../utils/constants";
import  RestaurantMenu  from "./RestaurantMenu";
import { Link } from "react-router-dom";

const RestaurantCard = ({resData}) =>{

    const {name, cuisines, costForTwo, sla, cloudinaryImageId, avgRatingString,id} = resData.info;
    return (
        <Link to={"/restaurants/" + id } ><div className="m-3 p-2 w-[300px] rounded-lg hover:scale-110" >
            <div className="my-2">
            <img className="h-40 w-full object-cover rounded-xl" src={RESIMG_URL + cloudinaryImageId} />
            </div>
            <h1 className="font-bold text-lg truncate ml-2">{name}</h1>
            <h3 className="font-bold text-sm ml-2"><span className="star text-green">&#9733;</span> { avgRatingString}  <span>   </span>  <span className="green">&#x2022;</span> {sla.slaString}</h3>
            <h3 className="text-sm truncate ml-2">{cuisines.join(", ")}</h3>
            
            <h3 className="text-sm ml-2">{costForTwo}</h3>
           
    </div>        
    </Link>
    );
}



export default RestaurantCard;