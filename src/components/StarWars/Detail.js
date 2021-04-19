import React from 'react';

import Film from './Film';

const Detail = ({ item }) => {
    return (
        <section>
            <h4>Detail section</h4>
            <p>Name: {item.name}</p>
            <p>Height: {item.height}</p>
            <p>Birth Year: {item.birth_year}</p>
            <p>Gender: {item.gender}</p>
            <article style={{paddingTop: '1rem'}}>
                <p>List of films:</p>
                <div id="films">
                    {item.films.map(filmUrl => (
                        <Film
                            key={filmUrl}
                            url={filmUrl}
                        />
                    ))}
                </div>
            </article> 
        </section>
    );
}

export default Detail;
