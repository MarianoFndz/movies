//React
import { useState, useEffect } from "react";
//Components
import Movie from "components/Movie";
//redux
import { useSelector } from "react-redux";

const Movies = ({ movies }) => {
  // const [movies, setMovies] = useState([]);
  // const data = useSelector((state) => state.movies.movies);

  // useEffect(() => {
  //   setMovies(data);
  // }, [data]);

  return movies.map((element, index) =>
    element.poster_path ? (
      index === 0 ? (
        <Movie
          key={element.id}
          top={true}
          id={element.id}
          data={element}
        ></Movie>
      ) : (
        <Movie
          key={element.id}
          top={false}
          id={element.id}
          data={element}
        ></Movie>
      )
    ) : null
  );
};

export default Movies;
