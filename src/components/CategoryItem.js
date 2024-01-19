import {CORS_URL, ITEMIMG_URL} from "../utils/constants";
import {  useDispatch } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";

const CategoryItem =({itemList})=>{
    const {name, price, description, imageId,defaultPrice} = itemList;
    // console.log(itemList, price);

    const dispatch = useDispatch();
    const handleAddItem = (item)=>{
      dispatch(addItem(item));
    }

    return(
    <div className="flex justify-between p-4 m-1/2 border-b"><div className="text-left w-9/12">
        <h1 className="font-bold">{name} - ₹ {price ? price/100 : defaultPrice/100}</h1>
        <p className="text-sm">{description}</p>
    </div>
    <div className="w-3/12 p-4 relative">
   
            <div>
              <button
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 p-2  rounded-lg bg-black text-white shadow-lg "
                onClick={() => handleAddItem(itemList)}
              >
                Add +
              </button>
              </div>
              <img src={CORS_URL+ITEMIMG_URL + imageId} className="w-full object-fill" /> 
          </div>
          <div><hr className="solid "></hr></div>
    </div>)
}

export const withDeletebtn = (CategoryItem)=>{
  const dispatch = useDispatch();
  const deleteItem = (item)=>{
    dispatch(removeItem(item));
  }
  return (item)=>{
    return(
      <div className="flex items-center">
        <div className="w-10/12">
        <CategoryItem {...item} />
        </div>
        <div className="w-2/12 ">
        <button className="text-3xl" onClick={()=>deleteItem(item)}>X</button>
        </div>
      </div>
    )
  }
}

export default CategoryItem;