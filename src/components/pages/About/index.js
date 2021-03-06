import React from "react";
import avatar from "../../../assets/about/avatar.jpg";

function About() {
	return (
		<main>
			<h2 className="about">Getting to Know Me . . .</h2>
			<img src={avatar} className="avatar" alt="cover" />
			<div className="about-me">
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
					bibendum turpis sed ex condimentum molestie. Mauris condimentum lectus
					ut ornare dignissim. Mauris faucibus urna mi, ac feugiat metus aliquam
					maximus. Proin aliquam justo nec diam vulputate vestibulum. Aenean
					sollicitudin nulla at nisi ornare, nec suscipit massa eleifend. Morbi
					tristique justo vel turpis sollicitudin, et tristique velit convallis.
					In hac habitasse platea dictumst. Phasellus mattis nunc sed orci
					consequat laoreet. Praesent id nisl nibh. Curabitur imperdiet
					ultricies mollis. In hac habitasse platea dictumst.
				</p>
			</div>
		</main>
	);
}

export default About;
