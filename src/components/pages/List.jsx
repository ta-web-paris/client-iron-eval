import React, { useEffect, useState } from "react";
// import axios from 'axios';
// import apiHandler from './../../api/handler';

const List = () => {
	const [list, setList] = useState([]);

	useEffect(() => {}, []);

	return (
		<>
			<h1>Let's list, shall we ?</h1>
			<p>This component should display resources you must fetch.</p>
		</>
	);
};

export default List;
