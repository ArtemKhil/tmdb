import React from 'react';
import {useDispatch} from "react-redux";

import {movieActions} from "../../redux";
import css from './Movie.module.css';


function Movie({movie}) {

    const {title, backdrop_path, id} = movie;

    const dispatch = useDispatch();


    return (

        <div className={css.movie_details}>

            <h2>{title}</h2>
            <img src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`} alt="movie poster"/>
            <button onClick={() => dispatch(movieActions.getById({id}))}>More Details</button>

        </div>
    );
}

export {Movie};