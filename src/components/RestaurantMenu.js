import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import Shimmer from "./Shimmer";
import ResMenuCategory from "./ResMenuCategory";
import useRestaurantMenu from "../../utils/useRestaurantMenu";

const RestaurantMenu = ()=>{
    const {resId} = useParams();

    const resInfo = useRestaurantMenu(resId);

    if (resInfo === null) return (<div className="text-center"><Shimmer /></div>)

    const {name, cuisines, costForTwoMessage,totalRatingsString, avgRatingString} = resInfo?.cards[0]?.card.card?.info;
    const categoryItems = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((category)=> category?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")

    return (
    <div className="text-center mx-40">
        <div className=" mt-4 p-4">
        <div className="flex justify-between items-center ">
        <div className="text-left">
        <h1 className="font-bold text-3xl">{name}</h1>
        <h2 className="">{cuisines.join(", ")}</h2>
        <h2 className="">{costForTwoMessage}</h2>
        </div>
        <div className="bg-white-50 shadow my-4 p-2 border border-gray">
            <h2 className="text-center">★ {avgRatingString} </h2>
            <hr className="h-px my-2 bg-gray-200 border-0"></hr>
            <h2 className="text-xs">{totalRatingsString}</h2>
        </div>
        </div>
        </div>
        <div>
        {categoryItems.map((category)=><ResMenuCategory  key={category?.card?.card?.title} menuCategory={category} />)}
        </div>
    </div>)
}

export default RestaurantMenu;