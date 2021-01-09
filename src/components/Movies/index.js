//Components
import Movie from "components/Movie";
//redux
import { useSelector } from "react-redux";

const Movies = () => {
  let movies = useSelector((state) => state.movies.movies);
  if (movies) {
    movies = movies.filter((element) => element.poster_path);
  }
  return movies
    ? movies.map((element, index) =>
        index === 0 ? (
          <Movie
            key={element.id}
            top={true}
            id={element.id}
            data={element}
            index={index}
          ></Movie>
        ) : (
          <Movie
            key={element.id}
            top={false}
            id={element.id}
            data={element}
            index={index}
          ></Movie>
        )
      )
    : null;
};

export default Movies;
