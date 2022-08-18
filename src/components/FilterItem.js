import React from "react";
import "./FilterItem.css"
function FilterItem(props) {

const ClickItemHandler = (event) => {
		props.onAddItem(event.target.value);
	};
	return(
		<>
			<div className="items-filter">
				<div className="items-filter__control">
				<div>
					<label>Country:</label>
					<select value={props.selected} onChange={ClickItemHandler}>
						<option value="United States">United States</option>
						<option value="India">India</option>
						<option value="France">France</option>
					</select>
				</div>
                <div>
					<label>Beds:</label>
					<select value={props.selected} onChange={ClickItemHandler}>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="4">4</option>
                        <option value="5">5</option>
					</select>
				</div>
                <div>
					<label>Price:</label>
					<select value={props.selected} onChange={ClickItemHandler}>
						<option value="2000">2000 or more</option>
						<option value="3000">3000 or more</option>
						<option value="4000">4000 or more</option>
					</select>
				</div>
				</div>

			</div>
		</>
	);
}

export default FilterItem;
