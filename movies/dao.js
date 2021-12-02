const model = require('./model');

const findAllMovies = () => model.find();

module.exports = {
  findAllMovies
};

const deleteMovie = (id) =>     // implement function to delete based on ID
    model.deleteOne({_id: id}); // use mongoose built-in removeOne method

const createMovie = (movie) =>
    model.create(movie);

const findMovieById = (id) =>
    model.findById(id);

const updateMovie = (id, movie) =>
    model.updateOne({_id: id},
        {$set: movie});


module.exports = {
  findAllMovies, deleteMovie, createMovie, findMovieById, updateMovie  // export the function to use elsewhere
};
