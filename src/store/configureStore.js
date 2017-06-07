/**
 * Created by Михаил on 01.06.2017.
 */
/**
 * Created by Михаил on 15.01.2017.
 */
import { createStore, applyMiddleware, compose } from 'redux'
import forecastReducer from '../reducers/reducers'
import thunkMiddleware from 'redux-thunk'
import { routerStateReducer, reduxReactRouter } from 'redux-react-router';

// if (module.hot) {
//     module.hot.accept ( '../reducers', () =>  {
//             const nextRootReducer = require ('../reducers/index');
//             store.replaceReducer(nextRootReducer)
//         }
//
//
//     )
// }
export default function createAppStore(initialState) {
    const store = createStore(forecastReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),applyMiddleware(thunkMiddleware), initialState);
    return store
}