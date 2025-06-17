import Result from './components/Result/Result';
import { GlobalStyles } from './styles/GlobalStyles';
import { DATA } from './components/data.js';
import Summary from './components/Summary/Summary.jsx';

const App = () => {
	return (
		<div>
			<GlobalStyles />

			<Result data={DATA}> </Result>
			<Summary data={DATA}></Summary>
		</div>
	);
};

export default App;
