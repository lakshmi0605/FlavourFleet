import { useState } from "react";
import CategoryItem from "./CategoryItem";

const ResMenuCategory = ({menuCategory, isActive, setActiveIndex})=>{
    const itemCards = menuCategory?.card?.card?.itemCards;

    const handleAccordionClick = ()=>{
        setActiveIndex();
    }

    return (
       <div className="text-center m-3 p-4 shadow bg-gray-100">
        <div className="flex flex-col sm:flex-row justify-between items-center" onClick={handleAccordionClick}>
            <h1 className="font-bold">{menuCategory?.card?.card?.title}  ({itemCards.length})</h1>
            <h2>▾</h2>
        </div>
        <div className="m-1">
            {isActive && itemCards.map((categoryItem) => <CategoryItem key={categoryItem?.card?.info?.id} itemList={categoryItem?.card?.info} />)}
        </div>
        </div>

        )
}

export default ResMenuCategory;