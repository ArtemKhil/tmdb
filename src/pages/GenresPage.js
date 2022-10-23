import React from 'react';
import {Outlet} from "react-router-dom";

import {Genres} from "../components";


function GenresPage() {

    return (
        <div>
            <Genres/>
            <Outlet/>
        </div>
    );
}

export {GenresPage};