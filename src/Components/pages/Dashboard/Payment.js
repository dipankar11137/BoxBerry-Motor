import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";
import Loading from "../../Share/Loading";
const stripePromise = loadStripe(
  "pk_test_51L1qoRHptux7TSyCTlbI9nx3AjQiVgLugq7xrEXkN2vpYAvD7STzzybgZQ13nOWR8Nce678znV1MTjbv2rHawOI700nW883wJo"
);

const Payment = () => {
  const { id } = useParams();
  const url = `http://localhost:5000/carBookings/${id}`;

  const { data: booking, isLoading } = useQuery(["booking", id], () =>
    fetch(url).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
        <div class="card-body">
          <p className="text-success font-bold">Hello, </p>
          <h2 class="card-title">Please Pay for {booking?.name}</h2>

          <p>Please pay: ${booking?.price} </p>
        </div>
      </div>
      <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
        <div class="card-body">
          <Elements stripe={stripePromise}>
            <CheckoutForm booking={booking} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
