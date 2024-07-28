import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { analysisLineGraphLayout } from "./AnalysisLineGraph.css";

const options = {
	title: {
		text: "総人口推移",
	},
	series: [
		{
			data: [1, 2, 3],
		},
	],
};

const AnalysisLineGraph = () => {
	return (
		<div className={analysisLineGraphLayout}>
			<HighchartsReact highcharts={Highcharts} options={options} />
		</div>
	);
};

export { AnalysisLineGraph };
