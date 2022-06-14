import React from "react";
import Header from "./components/Header";
import About from "./components/About";
// import Project from "./components/Project";
// import Footer from "./components/Footer";

function App() {
	return (
		<div>
			<Header></Header>
			<main>
				<About></About>
				{/* <Project></Project> */}
			</main>
		</div>
	);
}

export default App;
