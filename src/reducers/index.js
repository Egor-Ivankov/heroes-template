const initialState = {
    heroes: [],
    heroesLoadingStatus: 'idle',
    filters: [],
    filtersLoadingStatus: 'idle',
    activeFilter: 'all',
    filteredHeroes: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'HEROES_FETCHING':
            return {
                ...state,
                heroesLoadingStatus: 'loading'
            }
        case 'HEROES_FETCHED':
            return {
                ...state,
                heroes: action.payload,
                filteredHeroes:  state.activeFilter === 'all'
                                    ? action.payload
                                    : action.payload.filter(item => item.element === state.activeFilter),
                heroesLoadingStatus: 'idle'
            }
        case 'HEROES_FETCHING_ERROR':
            return {
                ...state,
                heroesLoadingStatus: 'error'
            }
        case 'HERO_DELETE':
            const newHeroes = state.heroes.filter(item => item.id !== action.payload);
            return {
                ...state,
                heroes: newHeroes,
                filteredHeroes:  state.activeFilter === 'all'
                                    ? newHeroes
                                    : newHeroes.filter(item => item.element === state.activeFilter),
            }
        case 'HERO_ADD':
            const newAddHeroes = [...state.heroes, action.payload]
            return {
                ...state,
                heroes: newAddHeroes,
                filteredHeroes: state.activeFilter === 'all'
                                    ? newAddHeroes
                                    : newAddHeroes.filter(item => item.element === state.activeFilter),
            }
        case 'FILTERS_FETCHING':
            return {
                ...state,
                filtersLoadingStatus: 'loading'
            }
        case 'FILTERS_FETCHED': 
            return {
                ...state,
                filters: action.payload,
                filtersLoadingStatus: 'idle'
            }
        case 'FILTERS_FETCHING_ERROR':
            return {
                ...state,
                filtersLoadingStatus: 'error'
            }
        case 'GET_ACTIVE_FILTER':
            return {
                ...state,
                activeFilter: action.payload,
                filteredHeroes: action.payload === 'all'
                                    ? state.heroes
                                    : state.heroes.filter(item => item.element === action.payload),
            }
        default: return state
    }
}

export default reducer;