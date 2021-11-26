import {applyMiddleware, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk';

import {baseRequest} from '../apis'

const logger = ({ getState }) => {
	return next => action => {
		console.log('will dispatch', action)

		// Call the next dispatch method in the middleware chain.
		// console.log('state after dispatch', getState())
		// console.log('return value', returnValue)

		// This will likely be the action itself, unless
		// a middleware further in chain changed it.
		return next(action)
	}
}

const configureStore = () => {
	return createStore(applyMiddleware(baseRequest, thunkMiddleware, logger));
};
export default configureStore;