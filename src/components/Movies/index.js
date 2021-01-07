//Components
import Movie from "components/Movie";
//redux
import { useSelector } from "react-redux";

const Movies = () => {
  const movies = useSelector((state) => state.movies.movies);

  return movies.map((element, index) =>
    element.poster_path ? (
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
    ) : null
  );
};

export default Movies;
