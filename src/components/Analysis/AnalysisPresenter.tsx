import { AnalysisControl } from "./AnalysisControl";
import { AnalysisLineGraph } from "./AnalysisLineGraph";
import { analysisPresenterLayout } from "./AnalysisPresenter.css";

const AnalysisPresenter = () => {
	return (
		<div className={analysisPresenterLayout}>
			<AnalysisControl />
			<AnalysisLineGraph />
		</div>
	);
};

export { AnalysisPresenter };
