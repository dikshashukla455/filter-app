import React from "react";
import "./DisplayItem.css";
function DisplayItem(props) {
	return (
		<div className="container">
			<img src={`${props.image}`} alt="" width="300" height="220" />
			<div className="info">
            <div><span className="price">${props.price}</span>/month</div>
			<div className="city">{props.city}</div>
			<div>{props.country}</div>
            <hr/>
			<div>Beds: {props.bed}</div>
            </div>
		</div>
	);
}

export default DisplayItem;
