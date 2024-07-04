import { useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import CategoryItem from "./CategoryItem";
import { useDispatch } from "react-redux";
import { withDeletebtn } from "./CategoryItem";
import OrderDetails from "./OrderDetails";
import PaymentForm from "./PaymentForm";
import { useState } from "react";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const [confirmAmount, setConfirmAmount] = useState(false);
  const [totalAmount, setTotalAmount] = useState(0);

  const CartItemComponent = withDeletebtn(CategoryItem);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const calculateSubtotal = () => {
    if(cartItems.length > 0){
      return cartItems.reduce((total, item) => { 
        let price = item.price ? item.price : item.defaultPrice;
        console.log(total); return total + price/1000
      }, 0);
    }
    return 0;
  };
  
  const subtotal = calculateSubtotal();

  const handleConfirmAmount = (amount) => {
    setTotalAmount(amount);
    setConfirmAmount(true);
  };

  return (
    <div className="flex ">
    <div className="mx-4  p-4 w-3/5">
      <div className="flex flex-col md:flex-row justify-between items-center m-2 md:m-4 p-2 md:p-4">
      <div>
        <h1 className="text-xl md:text-2xl font-bold">Cart</h1>
      </div>
      <div>
        <button className="p-2 m-2 bg-black text-white rounded-lg" onClick={handleClearCart}>
          Clear Cart
        </button>
      </div>
      </div>
      <div className="text-center mx-auto">
      {cartItems?.length === 0 && (
        <h1>Cart is empty. Add Items to the cart!</h1>
      )}
      {cartItems.map((item) => {
      return <CartItemComponent key={item.id} itemList={item} showImage={false}/>
      }
    )}
    {cartItems.length > 0 && (
            <div className="mt-4 p-4 border-t border-gray-300">
              <h2 className="text-lg md:text-xl font-semibold text-left">Subtotal: $ {subtotal.toFixed(2)}</h2>
            </div>
          )}
      </div>
    </div>
    <div className="mt-6 h-1/2 md:mx-10 lg:mx-10 xl:mx-10 p-4 w-full w-2/5">
        {!confirmAmount ? (
          <OrderDetails subtotal={subtotal} onConfirm={handleConfirmAmount} />
        ) : (
          <PaymentForm />
        )}
      </div>
    </div>

  );
};

export default Cart;