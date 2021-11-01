import React, {Component} from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './Reducers';
// import ListViewScreen from './Components/ListViewScreen';
import MainAppRoutes from './Routes/MainAppRoutes';

class App extends Component {
    
    render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))
    // store take three parameteres <reducers>, <initial state> , <>
     return (
        <Provider store={store}>
            <MainAppRoutes />
        </Provider>
     );
}
}

export default App;
