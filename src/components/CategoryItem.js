import {CORS_URL, ITEMIMG_URL} from "../utils/constants";
import {  useDispatch } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";
import ItemImage, { withAddBtn } from "./ItemImage";

const CategoryItem =({itemList, showAddButton = true })=>{
    const {name, price, description, imageId,defaultPrice} = itemList;
    const ItemImageWithAdd = withAddBtn(ItemImage);
    
    return(
      <div className="flex flex-col sm:flex-row justify-between p-4 m-1/2 border-b" data-testid="foodItem">
      <div className="text-left md:w-9/12">
        <h1 className="font-bold">{name} - ₹ {price ? price/100 : defaultPrice/100}</h1>
        <p className="text-sm">{description}</p>
      </div>
      <div className="md:w-3/12 p-4 relative">
        {showAddButton ? <ItemImageWithAdd imageId={imageId} itemList={itemList}/> : <ItemImage imageId={imageId} />}
        {/* <div>
          <button
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 p-2 rounded-lg bg-black text-white shadow-lg "
            onClick={() => handleAddItem(itemList)}
          >
            Add +
          </button>
        </div>
        <img src={CORS_URL+ITEMIMG_URL + imageId} className="w-full object-fill md:h-auto" alt="Item Image" />  */}
      </div>
      <div className="md:hidden"><hr className="solid"></hr></div>
    </div>
    )
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
        <CategoryItem key={item?.itemList?.id} itemList={item?.itemList} showAddButton={false}/>
        </div>
        <div className="w-2/12 ">
        <button className="text-3xl" onClick={()=>deleteItem(item)}>X</button>
        </div>
      </div>
    )
  }
}

export default CategoryItem;