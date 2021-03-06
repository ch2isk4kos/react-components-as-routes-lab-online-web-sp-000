import React from 'react';
import { directors } from '../data';

const Directors = () => {
    return (
    <div>
        <h1>Directors Page</h1>
        <hr></hr>
        {directors.map((director, index) => (
            <div key={index} className="director">
                <h3>{director.name}</h3>

                <p>Movies:</p>
                <ul>
                {director.movies.map((movie, index) => (
                    <li key={index}>{movie}</li>
                ))}
                </ul>

                <hr></hr>
            </div>
        ))}
    </div>
    );
}

export default Directors
