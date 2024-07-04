import {CORS_URL, ITEMIMG_URL} from "../utils/constants";
import {  useDispatch } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";
import ItemImage, { withAddBtn } from "./ItemImage";

const CategoryItem =({itemList, showImage = true })=>{
    const {name, price, description, imageId,defaultPrice} = itemList;
    const ItemImageWithAdd = withAddBtn(ItemImage);
    
    return(
      <div className="flex flex-col sm:flex-row justify-between p-4 m-1/2 border-b" data-testid="foodItem">
      <div className="text-left md:w-9/12">
        <h1 className="font-bold">{name} - $ {price ? (price/1000).toFixed(2) : (defaultPrice/1000).toFixed(2)}</h1>
        <p className="text-sm">{description}</p>
      </div>
      <div className="md:w-3/12 p-4 relative">
        {showImage && <ItemImageWithAdd imageId={imageId} itemList={itemList} />}
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
        <CategoryItem key={item?.itemList?.id} itemList={item?.itemList} showImage={false}/>
        </div>
        <div className="w-2/12 ">
        <button className="text-3xl" onClick={()=>deleteItem(item)}><img src="https://cdn-icons-png.flaticon.com/128/1214/1214428.png" alt="X" height="30" width="30"/></button>
        </div>
      </div>
    )
  }
}

export default CategoryItem;