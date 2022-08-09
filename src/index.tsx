import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import { store } from './state/store';

ReactDOM.render(
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-expect-error
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
