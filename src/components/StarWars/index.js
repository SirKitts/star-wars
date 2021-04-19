import React from 'react';
import axios from 'axios';

import {
    getHttps,
    getNewPage,
    getPeopleUrl,
    starwarsReducer
} from './Common';

import People from './People';
import Pagination from './Pagination';
import Detail from './Detail';

import logo from './images/starwars-logo.png';
import c3p0 from './images/starwars-c3p0.jpeg';
import './starwars.css';

const StarWars = () => {
    const [url, setUrl] = React.useState([getPeopleUrl()]);
    const [page, setPage] = React.useState(1);
    const [person, setPerson] = React.useState({});

    const [people, dispatchPeople] = React.useReducer(
        starwarsReducer,
        { 
            data: [],
            prev: null, 
            next: null,
            isLoading: false, 
            isError: false
        }
    );

    const handleFetchPeople = React.useCallback(async () => {
        dispatchPeople({ type: 'FETCH_INIT' });

        try {
            const resp = await axios.get(url);
            dispatchPeople({
                type: 'FETCH_PEOPLE_SUCCESS',
                payload: {
                    prev: resp.data.previous,
                    list: resp.data.results,
                    next: resp.data.next,
                },
            });

        } catch {
            dispatchPeople({ type: 'FETCH_FAILURE' });
        }
    }, [url]);

    React.useEffect(() => {
        handleFetchPeople();
    }, [handleFetchPeople]);

    const handleChangePage = (url) => {
        setUrl(getHttps(url));
        setPage( getNewPage(url) );
        setPerson({});
    };

    const handleSelectedPerson = (person) => {
        setPerson(person);
    };

    return (
        <div className="starwars-wrapper">
            <div className="starwars-logos">
                <img className="starwars-logo" src={logo} alt="logo"/>
                {people.isError && <p>Something went wrong ...</p>}
                {people.isLoading && <p>Loading ...</p>}
                <img className="starwars-logo" src={c3p0} alt="c3p0"/>
            </div>
            <div className="starwars-container">
                <div>
                    <People list={people.data} onSelectedPerson={handleSelectedPerson} />
                    <Pagination
                        prev={people.prev}
                        next={people.next}
                        page={page}
                        onChangePage={handleChangePage}
                    />
                </div> 
                {person.name && <Detail item={person}/>}
            </div>
        </div>
    );
}

export default StarWars;

