import React,{ useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	let [home, setHome] = useState("red")

	return (
		<>
		<div className="stick mx-auto"></div>
		<div className="container">
			<div className={home === 'red' ? 'red light glow': 'red light'} onClick={()=> setHome("red")}></div>
			<div className={home === 'yellow' ? 'yellow light glow' : 'yellow light'} onClick={()=> setHome("yellow")}></div>
			<div className={home === 'green' ? 'green light glow' : 'green light'} onClick={()=> setHome("green")}></div>
		</div>
		</>
	)
};

export default Home;
