import {
	analysisControlForm,
	analysisControlHeading,
	analysisControlLayout,
} from "./AnalysisControl.css";
import { AnalysisControlCheckbox } from "./AnalysisControlCheckbox";

const AnalysisControl = () => {
	return (
		<div className={analysisControlLayout}>
			<span className={analysisControlHeading}>都道府県一覧</span>
			<form className={analysisControlForm}>
				<AnalysisControlCheckbox prefName="北海道"/>
			</form>
		</div>
	);
};

export { AnalysisControl };
