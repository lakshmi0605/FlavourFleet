import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { CORS_URL, ITEMIMG_URL } from "../utils/constants";
import { useState } from "react";

// ItemImage Component
const ItemImage = ({ imageId }) => {
  return (
    <div className="relative w-full h-40 md:h-32 p-4">
      <img
        src={CORS_URL + ITEMIMG_URL + imageId}
        className="w-full h-full object-cover"
        alt="Item Image"
      />
    </div>
  );
};

// Higher Order Component withAddBtn
export const withAddBtn = (ItemImage) => {
  return ({itemList,...props}) => {
    const [buttonText, setButtonText] = useState('Add +');
    const dispatch = useDispatch();
    const handleAddItem = () => {
      dispatch(addItem(itemList));
      setButtonText('Added');
    };

    return (
      <div className="relative">
        <ItemImage {...props} />
        <button
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 p-2 rounded-lg bg-black text-white shadow-lg"
          onClick={() => handleAddItem()}
        >
          {buttonText}
        </button>
      </div>
    );
  };
};



export default ItemImage;
