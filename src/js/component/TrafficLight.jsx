import React,{useState} from "react";

//create your first component
function TrafficLight() {
	const [ selectedColor, setSelectedColor ] = useState ("");

	return (
		<div className="container">
		<div className="top-box"></div>
		<div className="traffic-light"> 
			<div onClick = {() => setSelectedColor("red")} className={"Light red"+((selectedColor === "red") ? " red glow" : "")}></div>
			<div onClick = {() => setSelectedColor("yellow")} className={"Light yellow"+((selectedColor === "yellow") ? " yellow glow" : "")}></div>
			<div onClick = {() => setSelectedColor("green")} className={"Light green"+((selectedColor === "green") ? " green glow" : "")}></div>
		</div>
		</div>
	)};

export default TrafficLight;
