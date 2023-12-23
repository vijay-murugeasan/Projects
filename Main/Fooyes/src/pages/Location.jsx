import { useDispatch, useSelector } from "react-redux";
import "../assets/css/order-sign_up.css";

import {
  Form,
  Link,
  redirect,
  useActionData,
  useNavigation,
} from "react-router-dom";
import { fetchAddress } from "../services/userSlice";
import { useEffect, useState } from "react";
import AutoCompleteLocation from "./AutoCompleteLocation";
function Location() {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const formErrors = useActionData();

  const dispatch = useDispatch();
  const {
    status: addressStatus,
    position,
    address,
    error: errorAddress,
  } = useSelector((state) => state.user);
  const isLoadingAddress = addressStatus === "loading";

  const [addressVal, setAddressVal] = useState("");

  return (
    <div id="register">
      <aside>
        <figure>
          <a href="index.html">
            <img src="/img/logo_sticky.svg" width="140" height="35" alt="" />
          </a>
        </figure>
        <div className="access_social">
          <h3>Order food from favourite restaurants near you.</h3>
        </div>
        <div className="divider"></div>

        <Form method="POST">
          <AutoCompleteLocation></AutoCompleteLocation>
          <div id="pass-info" className="clearfix"></div>

          <div className="input-group mb-3 ">
            <input
              type="text"
              name="address"
              className="form-control"
              placeholder="Enter Your Delivery Location"
              disabled={isLoadingAddress}
              value={addressVal}
              onChange={(e) => setAddressVal(e.target.value)}
            />
            <div className="input-group-append">
              <Link
                disabled={isLoadingAddress}
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(fetchAddress());
                }}
                className="btn_1 medium "
                type="button"
                style={{ height: "-webkit-fill-available" }}
              >
                Locate Me
              </Link>
            </div>
          </div>

          {addressStatus === "error" && (
            <p className="mt-2 alert alert-danger">{errorAddress}</p>
          )}
          {formErrors?.address && !address && (
            <p className="mt-2 alert alert-danger">{formErrors.address}</p>
          )}
          <div id="pass-info" className="clearfix"></div>
          <button
            disabled={isSubmitting || isLoadingAddress}
            className="btn_1 gradient full-width"
          >
            Find Food
          </button>
        </Form>
        <h5>POPULAR CITIES IN INDIA</h5>
        <p>
          Ahmedabad, Bangalore, Chennai, Delhi, Gurgaon, Hyderabad, Kolkata,
          Mumbai, Pune & more.
        </p>
        <div className="copy">© 2020 FooYes </div>
      </aside>
    </div>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log(data);
  const errors = {};
  if (!data.address) errors.address = "Enter Your Delivery Location";

  if (Object.keys(errors).length > 0) return errors;

  return redirect("/");
}

export default Location;
