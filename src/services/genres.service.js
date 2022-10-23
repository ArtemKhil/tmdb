import {axiosService} from "./axios.service";
import {urls} from "../configs";


const genresService = {
    getAll: () => axiosService.get(urls.genres),
    getMoviesByGenreId: (id, page = 1) => axiosService.get(`${urls.movies}?with_genres=${id}`, {params: {page}})

};


export {genresService};