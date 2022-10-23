import {Route, Routes} from "react-router-dom";

import {GenresPage, MoviesPage, SearchPage} from "./pages";
import {GenreDetails} from "./components";
import {MainLayout} from "./layout";


function App() {

    return (

        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route path={'movies'} element={<MoviesPage/>}/>
                <Route path={'search'} element={<SearchPage/>}/>
                <Route path={'genres'} element={<GenresPage/>}>
                    <Route path={':id'} element={<GenreDetails/>}/>
                </Route>
            </Route>
        </Routes>

    );
}

export default App;
