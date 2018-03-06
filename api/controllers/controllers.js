const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
const Movie = require('../models/model');
const Comment = require('../models/comments');
const fetch = require('node-fetch');


exports.pull_a_movie = (req, res) => {
    const title = req.body.title;
    fetch('http://www.omdbapi.com/?apikey='+process.env.API_KEY+'&t=' + title)
        .then(resp => resp.json())
        .then(resp => {
            const movie = new Movie({
              title: resp.Title,
              year: resp.Year,
              rated: resp.Rated,
              released: resp.Released,
              runtime: resp.Runtime,
              genre: resp.Genre,
              director: resp.Director,
              writer: resp.Writer,
              actors: resp.Actors,
              plot: resp.Plot,
              language: resp.Language,
              country: resp.Country,
              awards: resp.Awards,
              poster: resp.Poster,
              ratings: resp.Ratings,
              metascore: resp.Metascore,
              imdbRating: resp.imdbRating,
              imdbVotes: resp.imdbVotes,
              imdbID: resp.imdbID,
              type: resp.Type,
              dvd: resp.DVD,
              boxOffice: resp.BoxOffice,
              production: resp.Production,
              website: resp.Website,
              response: resp.Response
            });
          return movie;
        })
        .then(movie => {
          Movie.findOne(req.body, function (err, success) {
            if (err) {
              res.send(err);
            } else {
              if (success == null) {
                movie.save(function (err, success) {
                  if (err) {
                    res.send(err);
                  } else {
                    res.send(success);
                  }
                });
              } else {
                res.send("Movie already present");
              }
            }
          });
        })
        .catch(error => {
          return res.send(error);
        });
};

exports.list_all_movies = (req, res) => {
  Movie
    .find()
    .sort({ title: 1})
    .exec((err, movies) => {
      if(err) {
        res.send(err)
      }
      res.json(movies);
    })
};

exports.show_movie = (req, res) => {
  Movie.findById(req.params.id, (err, movie) => {
    if (err)
      res.send(err);
    res.json(movie);
  });
};

exports.create_a_comment = (req, res) => {
  Movie.findById(req.params.id, (err, movie) => {
    if (err) {
      res.send(err);
    }
    return movie;
  }).then(movie => {
        let comment = new Comment({
          movieId: movie._id,
          comment: req.body.comment
        });
      return comment.save();
    }).then(comment => {
      return res.send(comment);
    }).catch(error => {
      return res.send(error);
    });
};

exports.list_all_comments = (req, res) => {
  Comment.find({movieId: req.params.id}, (err, comments) => {
    if(err) {
      res.send(err);
    }
    res.json(comments);
  });
};

exports.list_comments = (req, res) => {
  Comment
    .find()
    .sort({ title: 1})
    .exec((err, comments) => {
      if(err) {
        res.send(err)
      }
      res.json(comments);
    })
};