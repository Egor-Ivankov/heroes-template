import { createAction } from "@reduxjs/toolkit"
export const fetchHeroes = (request) => (dispatch) => {
    dispatch(heroesFetching())
    request("http://localhost:3001/heroes")
        .then(data => dispatch(heroesFetched(data)))
        .catch(() => dispatch(heroesFetchingError()))
}

export const fetchFilters = (request) => (dispatch) => {
    dispatch(filtersFetching());
    request("http://localhost:3001/filters")
        .then(data => dispatch(filtersFetched(data)))
        .catch(() => dispatch(filtersFetchingError()))
}

export const heroesFetching = createAction('HEROES_FETCHING');

export const heroesFetched = createAction('HEROES_FETCHED');

export const heroesFetchingError = createAction('HEROES_FETCHING_ERROR');

export const heroesDelete = createAction('HERO_DELETE');

export const heroesAdd = createAction('HERO_ADD');

export const filtersFetching = createAction('FILTERS_FETCHING');

export const filtersFetched = createAction('FILTERS_FETCHED');

export const filtersFetchingError = createAction('FILTERS_FETCHING_ERROR');

export const getFilter = createAction('GET_ACTIVE_FILTER');