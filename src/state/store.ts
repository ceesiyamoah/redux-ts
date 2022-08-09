import { applyMiddleware, compose, createStore, Store } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
declare global {
	interface Window {
		__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
	}
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store: Store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

// export const store = createStore(reducers, {}, applyMiddleware(thunk));
