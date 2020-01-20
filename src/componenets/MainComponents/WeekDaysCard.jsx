import React from "react";

function WeekDaysCard(props) {
  console.log(props);
  return (
    <div className="form-check mcard">
      <span className="items badge badge-light">
        <input
          className="form-check-input"
          type="checkbox"
          value={props.day}
          id={props.id}
          checked={props.completed}
        ></input>
        <label className="form-check-label" htmlFor={props.id}>
          {props.day}
        </label>
      </span>
      <hr></hr>
    </div>
  );
}

export default WeekDaysCard;
