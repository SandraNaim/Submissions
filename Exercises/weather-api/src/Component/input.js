import React from "react";

export default function Input(props) {
  console.log(props);
  return (
    <header>
      <input type="text" className="input-color" value={props.name} />
      <input type="button" className="btn btn-primary" value={props.btnValue} />
    </header>
  );
}
