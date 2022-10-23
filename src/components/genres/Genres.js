import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {genreActions} from "../../redux";
import {Genre} from "../genre/Genre";
import css from './Genres.module.css';


function Genres() {

    const {genres} = useSelector(state => state.genreReducer);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(genreActions.getAll())
    }, []);

    return (

        <div className={css.genres_wrap}>
            {
                genres.map(genre => <Genre key={genre.id} genre={genre}/>)
            }
        </div>
    );
}

export {Genres};