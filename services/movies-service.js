let movies = [
  {_id: '123', title: 'Aliens', rating: 4.5},
  {_id: '234', title: 'Terminator', rating: 4.8},
  {_id: '345', title: 'Avatar', rating: 4.7}
];
module.exports = (app) => {
  const getAllMovies = (req, res) => res.json(movies);  // respond with movies array

  const deleteMovie = (req, res) => {   // handle delete HTTP request
    const id = req.params['mid'];   // read mid parameter from the URL
    movies = movies.filter(m => m._id !== id);  // filter out movie whose id is mid
    res.json(movies);   // respond with movies without the deleted movie
  };

  app.delete('/api/movies/:mid', deleteMovie);  // invoke handler if delete HTTP request

  app.get('/api/movies', getAllMovies);   // listen for "api/movies" URL request

  const createMovie = (req, res) => {
    const movie = req.body;
    movies = [...movies, movie];
    res.json(movies);
  }
  app.post('/api/movies', createMovie);


  const saveMovie = (req, res) => {
    const newMovie = req.body;  // parse movie from HTTP request's body
    const movieId = req.params['mid'];  // parse movieId from HTTp request parameters
    movies = movies.map(movie =>  // recreate movies array
        movie._id === movieId ? newMovie : movie);  // replace old movie with new version
    res.json(movies); // return movies array
  }
  app.put('/api/movies/:mid', saveMovie);   // listen


};
