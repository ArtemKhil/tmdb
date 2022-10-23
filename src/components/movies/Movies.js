import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";

import {movieActions} from "../../redux";
import {Movie} from "../movie/Movie";
import css from './Movies.module.css';


function Movies() {

    const {movies, movieDetails} = useSelector(state => state.movieReducer);

    const dispatch = useDispatch();

    const [query, setQuery] = useSearchParams({page: '1'});

    useEffect(() => {
        dispatch(movieActions.getAll({page: query.get('page')}));

    }, [query]);


    const prevPage = () => {
        setQuery(value => ({page: value.get('page') - 1}))
    };

    const nextPage = () => {
        setQuery(value => ({page: +value.get('page') + 1}))
    };

    return (
        <div>
            {
                movieDetails &&
                <div className={css.title_date}>
                    <h3>Original Title: {movieDetails.original_title}</h3>
                    <h3>Release Date: {movieDetails.release_date}</h3>
                </div>
            }
            {
                movieDetails &&
                <div className={css.overview}>
                    <h4>{movieDetails.overview}</h4>
                </div>
            }
            <div className={css.movies_wrap}>
                {
                    movies.map(movie => <Movie key={movie.id} movie={movie}/>)
                }
            </div>

            <div className={css.movies_buttons}>
                <button disabled={query.get('page') === '1'} onClick={prevPage}>Previous Page</button>
                <button disabled={query.get('page') === '500'} onClick={nextPage}>Next Page</button>
            </div>
        </div>
    );
}

export {Movies};