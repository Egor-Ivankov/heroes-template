import { createReducer } from "@reduxjs/toolkit";

const initialState = {
    filters: [],
    filtersLoadingStatus: 'idle',
    activeFilter: 'all',
}

const filters = createReducer(initialState, builder => {
    builder
        .addCase('FILTERS_FETCHING', state => {
            state.filtersLoadingStatus = 'loading';
        })
        .addCase('FILTERS_FETCHED', (state, action) => {
            state.filters = action.payload;
            state.filtersLoadingStatus = 'idle';
        })
        .addCase('FILTERS_FETCHING_ERROR', state => {
            state.filtersLoadingStatus = 'error';
        })
        .addCase('GET_ACTIVE_FILTER', (state, action) => {
            state.activeFilter = action.payload;
        })
        .addDefaultCase(() => { });
})

// const filters = (state = initialState, action) => {
//     switch (action.type) {
//         case 'FILTERS_FETCHING':
//             return {
//                 ...state,
//                 filtersLoadingStatus: 'loading'
//             }
//         case 'FILTERS_FETCHED':
//             return {
//                 ...state,
//                 filters: action.payload,
//                 filtersLoadingStatus: 'idle'
//             }
//         case 'FILTERS_FETCHING_ERROR':
//             return {
//                 ...state,
//                 filtersLoadingStatus: 'error'
//             }
//         case 'GET_ACTIVE_FILTER':
//             return {
//                 ...state,
//                 activeFilter: action.payload,
//             }
//         default: return state
//     }
// }

export default filters;