import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { updatePosition } from "../services/userSlice";
import { place_ID, search_API_URL } from "../services/constant";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

const AutocompleteLocation = () => {
  const [myOptions, setMyOptions] = useState([]);
  const [select, setSelect] = useState([]);
  const dispatch = useDispatch();

  async function getPlaceRes(addressVal) {
    const data = await fetch(search_API_URL + addressVal);
    const res = await data.json();
    myOptions.length = 0;
    // console.log(res);
    for (var i = 0; i < res.data.length; i++) {
      myOptions.push({
        label: res.data[i].description,
        id: res.data[i].place_id,
      });
    }
    // console.log(res?.data);
    setMyOptions(myOptions);
    // console.log(myOptions);
    // return data;
  }
  async function getGeoCode(id) {
    const data = await fetch(place_ID + id);
    const res = await data.json();
    // console.log(res);
    select.length = 0;
    for (var i = 0; i < res.data.length; i++) {
      select.push({
        label: res.data[i].geometry.location,
        id: res.data[i].place_id,
      });
    }
    // console.log(res?.data);
    setSelect(select);
    if (select.length > 0) return dispatch(updatePosition(select[0].label));
  }
  //   console.log(select);
  return (
    <div className="input-group mb-3">
      <Autocomplete
        name="search"
        style={{ width: "75%" }}
        freeSolo
        autoComplete
        autoHighlight
        options={myOptions}
        onChange={(e, value) => {
          //   console.log(value);
          getGeoCode(value?.id);
        }}
        getOptionLabel={(option) =>
          typeof option === "string" ? option : option.label
        }
        renderInput={(params) => (
          <TextField
            {...params}
            onChange={(e) => {
              getPlaceRes(e.target.value);
            }}
            variant="outlined"
            placeholder="Enter Your Delivery Location"
          />
        )}
        size="small"
      />
      <div className="input-group-append">
        <Link
          //   disabled={isLoadingAddress}
          //   onClick={(e) => {
          //     e.preventDefault();
          //     dispatch(fetchAddress());
          //   }}
          className="btn_1 medium "
          type="button"
          style={{ height: "-webkit-fill-available" }}
        >
          Locate Me
        </Link>
      </div>
    </div>
  );
};

export default AutocompleteLocation;
