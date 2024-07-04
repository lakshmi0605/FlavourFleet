const PaymentForm = () => {

    const onPaymentConfirmation = () => {
        console.log("Payment successful!!")
    }
    return (
      <div className="h-1/2 border border-gray-300 rounded-lg p-4">
        <form className="flex flex-col space-y-4">
          <h2 className="text-lg md:text-xl font-semibold">Payment Details</h2>
          <div>
            <label className="block text-sm font-medium text-gray-700">Card Number</label>
            <input
              type="text"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <div className="flex space-x-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">CVV</label>
              <input
                type="text"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Expiry Date</label>
              <input
                type="text"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Name on Card</label>
            <input
              type="text"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Billing Address</label>
            <input
              type="text"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <button
            type="submit"
            className="mt-4 p-2 bg-black text-white rounded-lg"
            onClick={()=>onPaymentConfirmation() }
          >
            Submit Payment
          </button>
        </form>
      </div>
    );
  };
  
  export default PaymentForm;
  