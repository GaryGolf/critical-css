import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducers from './reducers';

export const configureStore = (initialState = {}, api) => {
	const thunkWithApi = thunk.withExtraArgument(api);

	const composeEnhancers = composeWithDevTools(
		applyMiddleware(thunkWithApi)
	)(createStore);

	const store = composeEnhancers(reducers, initialState);

	if (module.hot) {
		module.hot.accept('./reducers', () => {
			const nextReducers = require('./reducers').default
			store.replaceReducer(nextReducers)
		})
	}

	return store;
}
