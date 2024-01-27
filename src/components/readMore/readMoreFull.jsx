

import React, { useState } from "react";
import "./readMore.css";

const ReadMore = ({ children }) => {
	const text = children;
	const [isReadMore, setIsReadMore] = useState(true);
	const toggleReadMore = () => {
		setIsReadMore(!isReadMore);
	};
	return (
		<p className="text">
			{isReadMore ? text.slice(0, 100) : text}
			<span
				onClick={toggleReadMore}
				className="read-or-hide"
				style={{ color: "green" }}
			>
				{isReadMore ? "...read more" : " show less"}
			</span>
		</p>
	);
};

const Content = () => {
	return (
		<div className="container justify"  >
			{/* <h2> */}
				<ReadMore >
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					 Odit impedit ipsam, molestiae reiciendis voluptas, 
					 animi et laborum reprehenderit est harum quod ex eveniet,
					  excepturi quasi assumenda soluta vero! Accusantium, ea.
					  Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
					  Perferendis voluptate et ad suscipit quisquam maxime saepe esse voluptatum minima,
					   inventore quaerat odit libero eveniet eius vitae quibusdam at, repellat unde.
				</ReadMore>
			{/* </h2> */}
		</div>
	);
};

export default Content;
