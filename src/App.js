import { React, useState } from "react";
import Data from "./components/Data";
import DisplayItem from "./components/DisplayItem";
import FilterItem from "./components/FilterItem";
function App() {
	/********************Set the state to India*******************/
	const [EnteredItem, setEnteredItem] = useState("India");
	const AddItemHandler = (SelectedItem) => {
		setEnteredItem(SelectedItem);
		console.log(SelectedItem);
	};

	/**********Add Filters using filter method*************/
	const FilterItems = Data.filter((item) => {
		if (item.country === EnteredItem) {
			return item.country;
		}
		if (item.beds === EnteredItem) {
			return item.beds;
		}
		if (parseInt(item.price, 10) > parseInt(EnteredItem, 10)) {
			return item.price;
		}
	});
	return (
		<div>
			<FilterItem selected={EnteredItem} onAddItem={AddItemHandler} />
			{FilterItems.map((item) => {
				return (
					<DisplayItem
						image={item.img}
						city={item.city}
						country={item.country}
						price={item.price}
						bed={item.beds}
					/>
				);
			})}
		</div>
	);
}

export default App;
