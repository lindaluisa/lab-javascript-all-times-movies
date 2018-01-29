
'use strict'    
/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

// ----- Iteration 1
function turnHoursToMinutes(movies) {
  var moviesWithMinutes = movies.map(function(movie) {
    var hours = 0;
    var hoursToMinutes = 0;
    var minutes = 0;
// .substring returns a subset of a string between one index and another
// 0 => indexStart (first character to inclue in the returned substring)
// indexHours => specifying the offset, first character not included
  var indexHour = movie.duration.indexOf('h');
    if(indexHour !== -1) {
      hours = parseInt(movie.duration.substring(0, indexHour));
      hoursToMinutes = hours * 60;
    }
// e.g. turns 2 hours into 120; parseInt turns string into num

  var indexMinute = movie.duration.indexOf('min');
    if(indexMinute !== -1) {
    if(indexHour !== -1) {
      minutes = parseInt(movie.duration.substring(indexHour + 1, indexMinute));
    } 
    else {
       minutes = parseInt(movie.duration.substring(0, indexMinute));
    }
    }
  // The Object.assign() method copies the values of all enumerable own properties 
  // from one or more source objects to a target object; returns the target object
  // variables hoursToMinutes & Minutes are already altered, not containing 'h
  var movieWithMinutes = Object.assign({}, movie, { duration: hoursToMinutes + minutes });
    return movieWithMinutes;
    });
  
  return moviesWithMinutes;
  }

// ----- Iteration 2
// Get the average of all rates with 2 decimals 
function ratesAverage(movies) {
  var sumRating = movies.reduce(function(acc, movie) {
    return acc + Number(movie.rate);
  }, 0);
    
  var averageRating = Math.round(sumRating / movies.length * 100) / 100;
    return averageRating;
}

// ----- Iteration 3
// Get the average of Drama Movies
function dramaMoviesRate(movies) {
 var dramaMovies = movies.filter(function(movie) {
    if (movie.genre.indexOf('Drama') !== -1) {
    return movie;
    }
  });
// the filter method created new array with only drama movies
// indexOF (-1 => not present)

// should return undefined if there is no Drama movie 
    var averageDramaRate = ratesAverage(dramaMovies);
    if (isNaN(averageDramaRate)) {
        return undefined;
    }
    return averageDramaRate;
}

// ----- Iteration 4


// ----- Iteration 5
// indexOf - possible to check whether an element is present in an array or not
// if greater than -1 , element will be present
function howManyMovies(movieArr) {
    var spielbergDrama = movieArr.filter(function(el){
      return (el.director === "Steven Spielberg" && el.genre.indexOf('Drama') > -1)
// returns array with only these movies
    })
  if (movieArr.length <= 0) {
    return undefined
    }
    else {
      return "Steven Spielberg directed " + spielbergDrama.length + " drama movies!";
    }
}

// Iteration 6
// function orderAlphabetically (moviesArr) {


// Best yearly rate average
