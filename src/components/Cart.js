import { useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import CategoryItem from "./CategoryItem";
import { useDispatch } from "react-redux";
import { withDeletebtn } from "./CategoryItem";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const CartItemComponent = withDeletebtn(CategoryItem);

  console.log(cartItems);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="mx-60 p-4">
        <div className="flex justify-between  items-center m-4 p-4">
            <div className="te">
      <h1 className="text-2xl font-bold">Cart</h1>
      </div>
      <div>
      <button
          className=" p-2 m-2 bg-black text-white rounded-lg"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        </div>
        </div>
      <div className="text-center m-auto">
        {cartItems?.length === 0 && (
          <h1> Cart is empty. Add Items to the cart!</h1>
        )}
        {cartItems.map((item)=><CartItemComponent key={item.id} itemList={item} />)}
      </div>
    </div>
  );
};

export default Cart;