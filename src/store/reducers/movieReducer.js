import { Add_MOVIE} from "../actions/movieActions";
import { moviesdata } from "./movies";
const userReducer = (state = { movies: moviesdata }, action) => {
  switch (action.type) {
    case Add_MOVIE:
      let movie = action.movie;
      return { ...state, movies: [...state.movies, movie] };

     default:
      return { ...state };
  }
};

export default userReducer;
