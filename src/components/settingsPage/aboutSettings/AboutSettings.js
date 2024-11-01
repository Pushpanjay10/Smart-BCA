import React from 'react';

import './aboutSettings.css';

function AboutSettings() {
	return (
		<div className="aboutSettings">
			<div className="aboutDevloperSection">
				<div className="aboutDeveloperTitle">About developer</div>
				<div>Developed by Pushpanjay patel</div>
				<div>Year:-1st Year</div>
				<div>Session :- 2024-27</div>
				<div>Roll no:- 103</div>
			</div>
			<div className="contactSection">
				<div className="contactSectionTitle">Contact us on:-</div>
				<div>Whatsapp - 9534059189</div>
				<div>
					Instagram- <a href="https://www.instagram.com/pushpanjaypatel/">@pushpanjaypatel</a>
				</div>
			</div>
		</div>
	);
}

export default AboutSettings;
