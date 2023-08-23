import { createReducer } from "@reduxjs/toolkit";

const initialState = {
    heroes: [],
    heroesLoadingStatus: 'idle',
};

const heroes = createReducer(initialState, builder => {
    builder
        .addCase('HEROES_FETCHING', state => {
            state.heroesLoadingStatus = 'loading';
        })
        .addCase('HEROES_FETCHED', (state, action) => {
            state.heroes = action.payload;
            state.heroesLoadingStatus = 'idle';
        })
        .addCase('HEROES_FETCHING_ERROR', (state) => {
            state.heroesLoadingStatus = 'error';
        })
        .addCase('HERO_DELETE', (state, action) => {
            state.heroes = state.heroes.filter(item => item.id !== action.payload);
        })
        .addCase('HERO_ADD', (state, action) => {
            state.heroes.push(action.payload);
        })
        .addDefaultCase(() => { });
})

// const heroes = (state = initialState, action) => {
//     switch (action.type) {
//         case 'HEROES_FETCHING':
//             return {
//                 ...state,
//                 heroesLoadingStatus: 'loading'
//             }
//         case 'HEROES_FETCHED':
//             return {
//                 ...state,
//                 heroes: action.payload,
//                 heroesLoadingStatus: 'idle'
//             }
//         case 'HEROES_FETCHING_ERROR':
//             return {
//                 ...state,
//                 heroesLoadingStatus: 'error'
//             }
//         case 'HERO_DELETE':
//             return {
//                 ...state,
//                 heroes: state.heroes.filter(item => item.id !== action.payload),
//             }
//         case 'HERO_ADD':
//             return {
//                 ...state,
//                 heroes: [...state.heroes, action.payload],
//             }
//         default: return state
//     }
// }

export default heroes;