import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";

import { defaultState } from "../../container/Laurels/Laurels";

function Paypal({ formState, setFormState, setSuccess, setError, setOrderId, show, success, orderId }) {
  const createOrder = (data, actions) => {
    return actions.order
      .create({
        purchase_units: [
          {
            description: formState.name,
            amount: {
              value: Number(formState.tableNo) * 200,
            },
          },
        ],
      })
      .then((orderID) => {
        setFormState({ ...defaultState });
        setOrderId(orderID);
        return orderID;
      })
      .catch((error) => {
        setSuccess(2);
      });
  };

  const onApprove = (data, actions) => {
    setSuccess(1);
    return actions.order.capture().then(function (details) {
      const { payer } = details;
    });
  };

  const onError = (data, actions) => {
    setSuccess(2);
    setError("An error occured with your payment");
  };

  const initialOptions = {
    "client-id": "AUy64j7jbLlnjIcfVUVR1MZ9d_cZ-h-5oB-E_piZ39lpYeB7gScsErooogB5Ws128RYK9j8WOYq4xX8E",
    currency: "USD",
    intent: "capture",
  };

  return (
    <div className="App">
      <PayPalScriptProvider options={initialOptions}>
        <button className="custom__button" type="submit">
          Confirm
        </button>

        {show ? (
          <PayPalButtons
            style={{
              layout: "horizontal",
              fundingicons: false,
            }}
            createOrder={createOrder}
            onApprove={onApprove}
            onError={onError}
          />
        ) : null}

        {success === 1 && (
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <img src="greenTick.png" alt="" height={30} width={30} />
            <h1 style={{ color: "green" }}>Payment Successful (ID: {orderId})</h1>
          </div>
        )}

        {success === 2 && (
          <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <img src="error.webp" width={30} height={30} alt="" />
            <h2 style={{ color: "red" }}>Oops an Error occurred, Please try again</h2>
          </div>
        )}
      </PayPalScriptProvider>
    </div>
  );
}

export default Paypal;
