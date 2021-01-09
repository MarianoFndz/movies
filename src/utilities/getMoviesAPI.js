const getMoviesAPI = function (url) {
  return fetch(url)
    .then((response) => response.json())
    .catch(false);
};

export const isRequestSucces = function (response, firstFunc, secdFunc) {
  response ? firstFunc() : secdFunc();
};

export default getMoviesAPI;
