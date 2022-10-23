import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useParams, useSearchParams} from "react-router-dom";

import {genreActions} from "../../redux";
import {GenreDetail} from "../genre.detail/Genre.Detail";
import css from './GenreDetails.module.css';


function GenreDetails() {

    const {moviesByGenre} = useSelector(state => state.genreReducer);

    const dispatch = useDispatch();

    const {id} = useParams();

    const [query, setQuery] = useSearchParams({page: '1'});

    useEffect(() => {

        dispatch(genreActions.getMoviesByGenreId({id, page: query.get('page')}));

    }, [id, query]);

    const prevPage = () => {
        setQuery(value => ({page: value.get('page') - 1}))
    };

    const nextPage = () => {
        setQuery(value => ({page: +value.get('page') + 1}))
    };


    return (

        <div className={css.genre_details_container}>

            <div className={css.genre_details_wrap}>
                {
                    moviesByGenre.map(movieByGenre => <GenreDetail key={movieByGenre.id} movieByGenre={movieByGenre}/>)
                }
            </div>

            <div className={css.genre_details_buttons}>
                <button disabled={query.get('page') === '1'} onClick={prevPage}>Previous Page</button>
                <button onClick={nextPage}>Next Page</button>
            </div>

        </div>
    );
}

export {GenreDetails};