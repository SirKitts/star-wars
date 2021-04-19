import React, { Fragment } from 'react';
import axios from 'axios';

import {
    getHttps,
    starwarsReducer
} from './Common';

const Film = ({ url }) => {
    const [film, dispatchFilm] = React.useReducer(
        starwarsReducer,
        { 
            data: {},
            isLoading: false, 
            isError: false
        }
    );

    const handleFetchFilm = React.useCallback(async () => {
        dispatchFilm({ type: 'FETCH_INIT' });

        try {
            const resp = await axios.get(getHttps(url));
            dispatchFilm({
                type: 'FETCH_FILMS_SUCCESS',
                payload: {
                    film: resp.data,
                },
            });
        } catch {
            dispatchFilm({ type: 'FETCH_FAILURE' });
        }
    }, [url]);

    React.useEffect(() => {
        handleFetchFilm();
    }, [handleFetchFilm]);

    return (
        <Fragment>
            {film.isError && <p>Something went wrong ...</p>}
            {film.isLoading && <p>Loading ...</p>}
            {film.data && (
            <p style={{paddingLeft: '1rem'}}>
                {film.data.title} <i>directed by</i> {film.data.director}
            </p>)}
        </Fragment>
    );
}

export default Film;
