import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

import {moviesService} from "../../services";


const initialState = {
    movies: [],
    errors: null,
    loading: false,
    movieDetails: null,
    moviesTitle: []
};

const getAll = createAsyncThunk(
    'movieSlice/getAll',
    async ({page}, {rejectWithValue}) => {
        try {
            const {data} = await moviesService.getAll(page);
            return data;
        } catch (e) {
            return rejectWithValue(e.response.data);
        }
    }
);

const getById = createAsyncThunk(
    'movieSlice/getById',
    async ({id}, {rejectWithValue}) => {
        try {
            const {data} = await moviesService.getById(id);
            return data;
        } catch (e) {
            return rejectWithValue(e.response.data);
        }
    }
);

const getMovieByTitle = createAsyncThunk(
    'movieSlice/getMovieByTitle',
    async ({title}, {rejectWithValue}) => {
        try {
            const {data} = await moviesService.getMovieByTitle(title);
            return data;
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.movies = action.payload.results;
                state.error = null;
                state.loading = false;
            })
            .addCase(getAll.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(getAll.rejected, (state, action) => {
                state.error = action.payload;
            })

            .addCase(getById.fulfilled, (state, action) => {
                state.movieDetails = action.payload;
                state.loading = false;
            })
            .addCase(getById.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(getById.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            })

            .addCase(getMovieByTitle.fulfilled, (state, action) => {
                state.moviesTitle = action.payload.results
                state.loading = false;
                state.error = null;
            })
            .addCase(getMovieByTitle.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(getMovieByTitle.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            })

});

const {reducer: movieReducer, actions: {}} = movieSlice;

const movieActions = {
    getAll,
    getById,
    getMovieByTitle
};

export {movieReducer, movieActions};
