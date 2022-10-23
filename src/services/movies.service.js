import {axiosService} from "./axios.service";
import {urls} from "../configs";


const moviesService = {
    getAll: (page = 1) => axiosService.get(urls.movies, {params: {page}}),
    getById: (id) => axiosService.get(`${urls.movie}/${id}`),
    getMovieByTitle: (title) => axiosService.get(`${urls.search}=${title}`)
};


export {moviesService};