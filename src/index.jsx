import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducers from './redux/reducers';
import App from './App';
import { loadState, saveState } from './localStorage';
import * as serviceWorker from './serviceWorker';

/*
 If you produced reducer with combineReducers,
 persistedState must be a plain object with the same shape as the keys passed to it.
*/
const persistedState = loadState();

const store = createStore(
	reducers,
	persistedState
);

store.subscribe(() => {
	console.log(store.getState());
	saveState({
		toDoListItems: store.getState().toDoListItems,
		template: store.getState().template
	});
});

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
