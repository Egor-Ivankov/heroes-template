export const heroesFetching = () => {
    return {
        type: 'HEROES_FETCHING'
    }
}

export const heroesFetched = (heroes) => {
    return {
        type: 'HEROES_FETCHED',
        payload: heroes
    }
}

export const heroesFetchingError = () => {
    return {
        type: 'HEROES_FETCHING_ERROR'
    }
}

export const heroesDelete = (id) => {
    return {
        type: 'HERO_DELETE',
        payload: id
    }
}

export const heroesAdd = (newHero) => {
    return {
        type: 'HERO_ADD',
        payload: newHero
    }
}

export const filtersFetched = (filters) => {
    return {
        type: 'FILTERS_FETCHED',
        payload: filters
    }
}

export const getFilter = (filter) => {
    return {
        type: 'GET_ACTIVE_FILTER',
        payload: filter
    }
}