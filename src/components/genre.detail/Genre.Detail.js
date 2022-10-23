import React from 'react';


function GenreDetail({movieByGenre}) {

    const {original_title, backdrop_path, vote_average} = movieByGenre;


    return (

        <div>
            <h2>{original_title}</h2>
            <h3>TMDB Rating: {vote_average}</h3>
            <img src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`} alt="movie poster"/>
        </div>
    );
}

export {GenreDetail};