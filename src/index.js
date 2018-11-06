import React    from 'react';
import ReactDOM from 'react-dom';

import thunk        from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './App';

import rootReducer   from './reducers';
import { getPhones } from './actions/phonesActions';

import registerServiceWorker from './registerServiceWorker';

const store = createStore(rootReducer, applyMiddleware(thunk));

store.dispatch(getPhones());

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, document.getElementById('root'));

registerServiceWorker();
