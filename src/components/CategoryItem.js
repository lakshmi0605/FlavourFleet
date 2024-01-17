import {CORS_URL, ITEMIMG_URL} from "../../utils/constants"

const CategoryItem =({itemList})=>{
    const {name, price, description, imageId} = itemList;
    return(
    <div className="flex justify-between p-4 m-1/2 border-b"><div className="text-left w-9/12">
        <h1 className="font-bold">{name} - ₹ {price/100}</h1>
        <p className="text-sm">{description}</p>
    </div>
    <div className="w-3/12 p-4 relative">
    <img src={CORS_URL+ITEMIMG_URL + imageId} className="w-full object-fill" /> 
            
              <button
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 p-2  rounded-lg bg-black text-white shadow-lg "
                onClick={() => handleAddItem(item)}
              >
                Add +
              </button>
          </div>
          <div><hr className="solid "></hr></div>
    </div>)
}

export default CategoryItem;