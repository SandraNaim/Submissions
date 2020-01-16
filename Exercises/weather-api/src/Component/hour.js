import React from "react";

export default function TodayHour(props) {
  console.log(props);
  return (
    <div className="col-sm-2 d-flex flex-column align-items-center">
      <label className="time1">{props.weatherTime}</label>
      <img className="imgwidth" src={props.weatherImage} />
      <span className="time1">{props.temperature} &#8451;</span>
    </div>
  );
}
