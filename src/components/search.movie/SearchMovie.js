import React from 'react';


function SearchMovie({movieTitle}) {

    const {title, backdrop_path} = movieTitle;

    return (
        <div>
            <h2>{title}</h2>
            <img src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`} alt="movie poster"/>
        </div>
    );
}

export {SearchMovie};