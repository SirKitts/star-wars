export const API_BASE = ' https://swapi.dev/api';
export const API_PEOPLE_ENDPOINT = `${API_BASE}/people/`;
export const API_FILMS_ENDPOINT = `${API_BASE}/films/`;
export const PARAM_PAGE = 'page=';

export const getPeopleUrl = () => `${API_PEOPLE_ENDPOINT}`;
export const getPeopleUrlById = (id) => `${API_PEOPLE_ENDPOINT}${id}`;
export const getHttps = (url) => {
    return url.replace('http://','https://');
}
export const getNewPage= (url) => {
    return ('url', url.split('=')[1]);
}

export const starwarsReducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_INIT':
            return {
                ...state,
                isLoading: true,
                isError: false,
            };
        case 'FETCH_PEOPLE_SUCCESS':
            return {
                ...state,
                isLoading: false,
                isError: false,
                prev: action.payload.prev,
                data: action.payload.list,
                next: action.payload.next,
            };
        case 'FETCH_FILMS_SUCCESS':
            return {
                ...state,
                isLoading: false,
                isError: false,
                data: action.payload.film,
            };
        case 'FETCH_FAILURE':
            return {
                ...state,
                isLoading: false,
                isError: true,
            };
        default:
            throw new Error();
    }
};
