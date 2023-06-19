import React, { useEffect, useState } from "react";
import Widget from "../../common/Widget";
import "./TopChannels.css";

const TopChannels = ({ ...rest }) => {
	const [socialNetworks, setSocialNetworks] = useState([
		{
			name: "Facebook",
			color: "#017EFA",
			visitor: 50,
		},
		{
			name: "Instagram",
			color: "#FD1F9B",
			visitor: 228,
		},
		{
			name: "Linkedin",
			color: "#007AB5",
			visitor: 24,
		},
		{
			name: "Youtube",
			color: "#FF0000",
			visitor: 96,
		}
	]);

	useEffect(() => {
		let totalVisitor = 0;
		socialNetworks.forEach((SN) => {
			totalVisitor += SN.visitor;
		});
		const newState = [...socialNetworks];
		socialNetworks.forEach((SN, i) => {
			newState[i].percent = Math.round((SN.visitor / totalVisitor) * 100);
		});

		setSocialNetworks(newState);
	}, []);

	return (
		<Widget title="Top Channels" {...rest}>
			<div
				style={{
					padding: "22px 27px 27px 27px",
				}}
			>
				<div className="statBar">
					{socialNetworks.map((SN, i) => (
						<div
							key={i}
							style={{
								background: SN.color,
								height: "100%",
								width: SN.percent && SN.percent + "%",
							}}
						></div>
					))}
				</div>
			</div>
		</Widget>
	);
};

export default TopChannels;
