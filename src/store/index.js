// import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import heroes from '../components/heroesList/heroesSlice';
import filters from '../components/heroesFilters/filtersSlice';
import { configureStore } from '@reduxjs/toolkit';

// const enhancer = (createStore) => (...args) => {
//     const store = createStore(...args);

//     const oldDispatch = store.dispatch;
//     store.dispatch = (action) => {
//         if (typeof (action) === 'string') {
//             return oldDispatch({ type: action })
//         }
//         return oldDispatch(action);
//     }
//     return store;
// }

const stringMiddleware = () => (next) => (action) => {
    if (typeof (action) === 'string') {
        return next({ type: action })
    }
    return next(action);
}

// const store = createStore(combineReducers(
//     { heroes, filters }),
//     compose(
//         applyMiddleware(ReduxThunk, stringMiddleware),
//         window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//     )
// compose(
//     enhancer,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// )
// );

const store = configureStore({
    reducer: { filters, heroes },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(stringMiddleware),
    devTools: process.env.NODE_ENV !== 'production'
})

export default store;