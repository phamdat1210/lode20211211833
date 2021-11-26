import './App.css';
import { Provider } from 'react-redux';
import configureStore from './reducers/configStore';
import RootRoutes from "./routes";

function App() {

	return (
		<Provider store={configureStore()}>
			<RootRoutes/>
		</Provider>
	);
}

export default App;
