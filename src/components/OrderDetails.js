import { useState } from "react";

const OrderDetails = ({ subtotal, onConfirm }) => {
  const [requiresUtensils, setRequiresUtensils] = useState(false);
  const [terms, setTerms] = useState(false);
  const utensilCharge = requiresUtensils ? 3 : 0;
  const totalBeforeTax = subtotal + utensilCharge;
  const tax = totalBeforeTax * 0.01;
  const totalAmount = totalBeforeTax + tax;

  return (
    <div className="h-1/2 border border-gray-300 rounded-lg p-4">
      <h2 className="text-lg md:text-xl font-semibold">Order Information</h2>
      <div className="mt-4">
        <div className="flex justify-between">
          <span className="text-sm ">Order Amount</span>
          <span className="text-sm ">$ {subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm ">Utensils</span>
          <span className="text-sm ">$ {utensilCharge.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm ">Tax (1%)</span>
          <span className="text-sm ">$ {tax.toFixed(2)}</span>
        </div>
        <hr className="my-4" />
        <div className="flex justify-between">
          <span className="text-sm md:text-xl ">Total</span>
          <span className="text-sm md:text-xl ">$ {totalAmount.toFixed(2)}</span>
        </div>
      </div>
      <div className="my-2">
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            className="form-checkbox"
            checked={requiresUtensils}
            onChange={() => setRequiresUtensils(!requiresUtensils)}
          />
          <span className="ml-2 text-sm">  Requires Utensils (+$3)</span>
        </label>
        </div><div className="flex items-start">
        <label className="inline-flex items-start">
          <input
            type="checkbox"
            className="form-checkbox"
            checked={terms}
            onChange={() => setTerms(!terms)}
          />
          <span className="ml-2 text-[0.625rem]">  By clicking "Accept" or by accessing or using our services, you agree to be bound by these Terms and Conditions, which include our Privacy Policy.</span>
        </label>
      </div>
      <button
        className="mt-4 p-2 bg-black text-white rounded-lg w-full"
        onClick={() => onConfirm(totalAmount)}
      >
        Confirm Amount
      </button>
    </div>
  );
};

export default OrderDetails;
