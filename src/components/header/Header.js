import React from 'react';
import {Link} from "react-router-dom";

import css from './Header.module.css';


function Header() {

    return (
        <div>

            <div className={css.menu}>
                <div><Link to={'movies'}>Discover Movies</Link></div>
                <div><Link to={'search'}>Search Movies</Link></div>
                <div><Link to={'genres'}>Discover Genres</Link></div>
            </div>

        </div>
    );
}

export {Header};