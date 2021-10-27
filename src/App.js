import React, {Component} from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk'
import reducers from './Reducers'
import ListViewScreen from './Components/ListViewScreen';

class App extends Component {
    
    render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))
    // store take three parameteres <reducers>, <initial state> , <>
     return (
    //     // <ListViewScreen />
    <Provider store={store}>
        <ListViewScreen />
    </Provider>
     );
}
}

export default App;
