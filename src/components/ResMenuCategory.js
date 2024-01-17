import { useState } from "react";
import CategoryItem from "./CategoryItem";

const ResMenuCategory = ({menuCategory, isActive, setActiveIndex})=>{
    const itemCards = menuCategory?.card?.card?.itemCards;

    const handleAccordionClick = ()=>{
        setActiveIndex();
    }

    return (<div>
        <div className="text-center m-3 p-4 shadow bg-gray-100 ">
        <div className="flex justify-between" onClick={handleAccordionClick}>
        <h1>{menuCategory?.card?.card?.title}</h1>
        <h2>▾</h2>
        </div>
        </div>
        <div className="m-1">
            {isActive && itemCards.map((categoryItem) =><CategoryItem key={categoryItem?.card?.info?.id} itemList={categoryItem?.card?.info}/>)}
            
        </div>
        </div>
        )
}

export default ResMenuCategory;