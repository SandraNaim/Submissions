import React from "react";

export default function Today(props) {
  console.log(props);
  return (
    <div className="above">
      <img src={props.weatherImage} />
      <label for="name1" className="name1">
        name
      </label>
      <div className="flex1">
        <div>
          <b>Temperature</b>
        </div>
        <label for="temp1" className="temp1">
          {" "}
          {props.mintemp} to {props.maxtemp}
        </label>
      </div>
      <div class="flex2">
        <div>
          <b>Humidity</b>
        </div>
        <label className="hum1">{props.humidity}</label>
        <div>
          <b>Pressure</b>
        </div>
        <label className="pres1">{props.pressure}</label>
      </div>
    </div>
  );
}
