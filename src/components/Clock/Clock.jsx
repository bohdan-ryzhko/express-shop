import React, { useState } from "react";
 
const options = ["Bell Pepper", "Sausage", "Pepperoni", "Pineapple"];
 
export default function PersonalPizza() {
	const [pizza, setPizza] = useState([]);

	const makePositions = pizzaName => () => {
		setPizza(prevState => ([
			...prevState,
			pizzaName
		]))
	}

	return (
		<>
			<ul className="pizza-list">
				{options.map(pizza => <li key={pizza}>
					<button onClick={makePositions(pizza)}>{pizza}</button>
				</li>)}
			</ul>
			<p>Your order {pizza.join(", ")} {pizza.length > 1 ? "pizza's" : "pizza"}</p>
		</>
	)
}