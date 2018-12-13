import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducers from './redux/reducers';
import App from './App';
import { loadState, saveState } from './localStorage';
import * as serviceWorker from './serviceWorker';

const persistedState = loadState();
console.log(persistedState);
const store = createStore(
	reducers,
	persistedState
);

store.subscribe(() => {
	console.log(store.getState());
	saveState({
		toDoListItems: store.getState().toDoListItems
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