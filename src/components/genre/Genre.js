import React from 'react';
import {Link} from "react-router-dom";

import css from './Genre.module.css';


function Genre({genre}) {

    const {id, name} = genre;

    return (

        <div className={css.genre}>
            <Link to={genre.id.toString()}>{name}</Link>
        </div>

    );
}

export {Genre};