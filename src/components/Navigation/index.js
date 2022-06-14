import React from "react";

// function Navigation() {
// return (
// 	<nav>
// 		<ul className="flex-row">
// 			<li className="nav-margin">
// 				<a data-testid="about" href="#about">
// 					About Me
// 				</a>
// 			</li>
// 			<li className="nav-margin">
// 				<a data-testid="portfolio" href="#portfolio">
// 					Portfolio
// 				</a>
// 			</li>
// 			<li className="nav-margin">
// 				<a data-testid="resume" href="#resume">
// 					Resume
// 				</a>
// 			</li>
// 			<li>
// 				<span>Contact</span>
// 			</li>
// 		</ul>
// 	</nav>
// );
function Navigation({ currentPage, handlePageChange }) {
	return (
		<ul className="nav nav-tabs">
			<li className="nav-item">
				<a
					href="#about"
					onClick={() => handlePageChange("About")}
					//*  TODO: BONUS: Add a comment explaining what kind of operator this is and what it is checking for

					className={currentPage === "About" ? "nav-link active" : "nav-link"}
				>
					About Me
				</a>
			</li>
			<li className="nav-item">
				<a
					href="#portfolio"
					onClick={() => handlePageChange("Portfolio")}
					//  TODO: Add a comment explaining what this logic is doing

					className={
						currentPage === "Portfolio" ? "nav-link active" : "nav-link"
					}
				>
					Portfolio
				</a>
			</li>
			<li className="nav-item">
				<a
					href="#resume"
					onClick={() => handlePageChange("Resume")}
					//  TODO: Add a comment explaining what this logic is doing

					className={currentPage === "Resume" ? "nav-link active" : "nav-link"}
				>
					Resume
				</a>
			</li>
			<li className="nav-item">
				<a
					href="#contact"
					//  TODO: Add a comment explaining what this logic is doing

					onClick={() => handlePageChange("Contact")}
					className={currentPage === "Contact" ? "nav-link active" : "nav-link"}
				>
					Contact
				</a>
			</li>
		</ul>
	);
}

export default Navigation;
