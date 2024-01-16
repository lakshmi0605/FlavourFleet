import { RESIMG_URL } from "../../utils/constants";

const RestaurantCard = ({resData}) =>{
    const {name, cuisines, costForTwo, sla, cloudinaryImageId, avgRatingString} = resData.info;
    return (
        <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200" >
            <img className="h-32 w-full object-cover" src={RESIMG_URL + cloudinaryImageId} />
            <h1 className="font-bold text-lg">{name}</h1>
            <h3 className="text-sm">{cuisines.join(", ")}</h3>
            <h3 className="text-sm">{avgRatingString + " stars"}</h3>
            <h3 className="text-sm">{costForTwo}</h3>
            <h3 className="text-sm">{sla.slaString}</h3>
        </div>
    );
}



export default RestaurantCard;