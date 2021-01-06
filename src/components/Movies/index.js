import Movie from "components/Movie";

const Movies = ({ movies }) => {
  return movies.map((element, index) =>
    element.poster_path ? (
      index === 0 ? (
        <Movie key={element.id} top={true} data={element}></Movie>
      ) : (
        <Movie key={element.id} top={false} data={element}></Movie>
      )
    ) : null
  );
};

export default Movies;
