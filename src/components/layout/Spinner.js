import React from "react";
import spinner from "./spinner.gif";

function Spinner() {
	return (
		<div>
			<img
				src={spinner}
				alt="loading...."
				style={{
					width: "200px",
					margin: "auto",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
			/>
		</div>
	);
}

export default Spinner;
