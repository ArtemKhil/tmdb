const baseURL = 'https://api.themoviedb.org/3';

const urls = {
    movies: '/discover/movie',
    movie: '/movie',
    genres: '/genre/movie/list',
    search: '/search/movie?query'
};

const accessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYTI4NDAwY2NlN2I0NmM3MDlkMjYxZDgzZDViMTMwYSIsInN1YiI6IjYyMDI0YzMzYWM2Yzc5MDBiNzQ5ZDMxMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yTt5GSzYojpqU_nr08t93UbHgERNyel3LAJLaWsxb0s';


export {baseURL, urls, accessToken};