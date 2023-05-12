import React, { useRef } from "react";
import CheckoutSteps from "../Cart/CheckoutSteps";
import MetaData from "../layout/MetaData";
import { Typography } from "@material-ui/core";

import "./payment.css";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import EventIcon from "@material-ui/icons/Event";
import VpnKeyIcon from "@material-ui/icons/VpnKey";

const Payment = () => {
  const orderInfo = JSON.parse(sessionStorage.getItem("orderInfo"));

  const payBtn = useRef(null);

  return (
    <>
      <MetaData title="Payment" />
      <CheckoutSteps activeStep={2} />
      <div className="paymentContainer">
        <form className="paymentForm">
          <Typography>Card Info</Typography>
          <div>
            <CreditCardIcon />
            {/* <CardElement className="paymentInput" /> */}
          </div>
          <div>
            <EventIcon />
            {/* <CardExpiryElement className="paymentInput" /> */}
          </div>
          <div>
            <VpnKeyIcon />
            {/* <CardCvcElement className="paymentInput" /> */}
          </div>

          <input
            type="submit"
            value={`Pay - ₹${orderInfo && orderInfo.totalPrice}`}
            ref={payBtn}
            className="paymentFormBtn"
          />
        </form>
      </div>
    </>
  );
};

export default Payment;
