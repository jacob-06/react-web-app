import React from "react";

function ContactCard(props) {
  return (
    <div className="contact-card">
      <img src={props.imgUrl} alt={props.name} />
      <h3>{props.name}</h3>
      <p style={{ display: props.phone ? "block" : "none" }}>
        Phone : {props.phone}
      </p>
      <p style={{ color: !props.email && "#888888" }}>Email : {props.email}</p>
    </div>
  );
}
export default ContactCard;
