import React from "react";
import "../../styles/form.css";

const Form = () => {
	return (
		<form className="form">
			<label htmlFor="name">Name: </label>
			<input type="text" id="name" />

			<label htmlFor="colors">Colors: </label>
			<input type="text" id="colors" />

			<label htmlFor="age">Age: </label>
			<input type="number" min={0} id="age" />

			<label htmlFor="image">Image (url) :</label>
			<input type="text" id="image" />

			<button>Submit</button>
		</form>
	);
};

export default Form;
