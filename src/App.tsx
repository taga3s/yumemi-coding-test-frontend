import { app } from "./App.css";
import { Header } from "./components";
import { AnalysisPresenter } from "./components/Analysis/AnalysisPresenter";

function App() {
	return (
		<div className={app}>
			<Header />
			<AnalysisPresenter />
		</div>
	);
}

export default App;
