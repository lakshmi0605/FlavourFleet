import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import ResMenuCategory from "./ResMenuCategory";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = ()=>{
    const {resId} = useParams();

    const resInfo = useRestaurantMenu(resId);

    const [activeIndex, setActiveIndex] = useState(null);

    const handleAccordion= (index) => {
        setActiveIndex((prev) => (prev === index ? null : index));
      };
     
    if (resInfo === null) return (<div className="text-center py-20">Loading...</div>)
    const {name, cuisines, costForTwoMessage,totalRatingsString, avgRatingString} = resInfo?.cards[2]?.card.card?.info;
    const categoryItems = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((category)=> category?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")

    return (
        <div className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
        <div className="mt-4 p-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-left mb-4 md:mb-0 md:mr-4">
              <h1 className="font-bold text-3xl">{name}</h1>
              <h2>{cuisines.join(", ")}</h2>
              <h2>{costForTwoMessage}</h2>
            </div>
            <div className="bg-white-50 shadow my-4 p-2 border border-gray">
        <h2 className="text-center text-green-600">★ {avgRatingString} </h2>
        <hr className="h-px my-2 bg-gray-200 border-0"></hr>
        <h2 className="text-xs">{totalRatingsString}</h2>
      </div>
          </div>
        </div>
        <div>
          {categoryItems.map((category, index) => (
            <ResMenuCategory
              key={category?.card?.card?.title}
              menuCategory={category}
              isActive={index === activeIndex}
              setActiveIndex={() => handleAccordion(index)}
            />
          ))}
        </div>
      </div>
      )
}

export default RestaurantMenu;