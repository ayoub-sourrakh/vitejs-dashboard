import React from "react";
import "./LineChart.css";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Tooltip
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Tooltip
);

export const options = {
	responsive: true,
	maintainAspectRatio : false,
	animation: false,
	datasets : {
		line: {
			pointRadius: 5,
			pointHoverRadius: 10,
			pointHoverBackgroundColor : '#fff',
			pointHoverBorderWidth : 4
		}
	},
    scales: {
		x: {
		  grid: {
			display: false,
		  },
		  border : {
			display: false
		  },
		  ticks : {
			color: '#8E8E8E',
			font: {
				size : 14
			},
		  }
		},
		y: {
		  grid: {
			display: false
		  },
		  border : {
			display: false
		  },
		  ticks : {
			color: '#8E8E8E',
			maxTicksLimit: 5,
			font: {
				size : 14
			},
			callback : function(value){
				if(value > 1000) return value / 1000 + 'k'
				return value
			}
		  }
		},
	  }
};

export const data = {
	labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
	datasets: [
		{
			label: "Med organic reach",
			data: [120000, 11500, 185200, 132500, 85200, 45000, 90000, 185200, 132500, 85200, 45000, 90000],
			borderColor: "#FD1F9B",
			backgroundColor: "#FD1F9B",
			pointHoverBorderColor: "#FD1F9B"
			
		},
		{
			label: "High paid reach",
			data: [15000, 190000, 125000, 70000, 165000, 90000, 167000, 125000, 70000, 165000, 90000, 167000],
			borderColor: "#017EFA",
			backgroundColor: "#017EFA",
			pointHoverBorderColor: "#017EFA"
		}
	],
};

const LineChart = ({ ...rest }) => {
	return (
		<div className="lineChart" {...rest}>
			<Line options={options} data={data} redraw={true} updateMode="resize" />
		</div>
	);
};

export default LineChart;
