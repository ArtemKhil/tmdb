import React from 'react';
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";

import {SearchMovie} from "../search.movie/SearchMovie";
import {movieActions} from "../../redux";
import css from './SearchForm.module.css';


function SearchForm() {

    const {handleSubmit, register, reset} = useForm();

    const {moviesTitle} = useSelector(state => state.movieReducer);

    const dispatch = useDispatch();

    const submit = ({title}) => {
        dispatch(movieActions.getMovieByTitle({title}))
        reset()
    };

    return (

        <div className={css.form_container}>

            <div className={css.search_form}>
                <form onSubmit={handleSubmit(submit)}>
                    <input type="text" placeholder={'Movie Title'} {...register('title')}/>
                    <button>Search</button>
                </form>
            </div>

            <div className={css.search_result}>
                {
                    moviesTitle.map(movieTitle => <SearchMovie key={movieTitle.id} movieTitle={movieTitle}/>)
                }
            </div>

        </div>
    );
}

export {SearchForm};