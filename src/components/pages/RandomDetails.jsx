import React, { useEffect, useState } from "react";
// import axios from 'axios';
// import apiHandler from "./../../api/handler";

const RandomDetails = () => {
	const [element, setElement] = useState(null);
	useEffect(() => {}, []);
	return (
		<>
			<h1>Resource's details</h1>
			<p>
				Here you should display some informations about the element you fetched
			</p>
		</>
	);
};

export default RandomDetails;
