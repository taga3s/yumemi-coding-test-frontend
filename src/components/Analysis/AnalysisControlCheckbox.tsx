import type { FC } from "react";
import { analysisControlCheckBoxLabel } from "./AnalysisControlCheckbox.css";

type Props = {
	prefName: string
};

const AnalysisControlCheckbox: FC<Props> = (props) => {
	const { prefName } = props;

	return (
		<label className={analysisControlCheckBoxLabel} htmlFor={prefName}>
			<input type="checkbox" id={prefName} />
			<span>{prefName}</span>
		</label>
	);
};

export { AnalysisControlCheckbox };
