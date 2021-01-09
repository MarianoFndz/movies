const getMoviesAPI = function (url) {
  return fetch(url)
    .then((response) => response.json())
    .catch(false);
};

export default getMoviesAPI;
