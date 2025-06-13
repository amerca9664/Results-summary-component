import Result from './components/Result/Result';
import { GlobalStyles } from './styles/GlobalStyles';
import { DATA } from './components/data.js';

const App = () => {
	return (
		<div>
			<GlobalStyles />

			<Result data={DATA}> </Result>
		</div>
	);
};

export default App;
