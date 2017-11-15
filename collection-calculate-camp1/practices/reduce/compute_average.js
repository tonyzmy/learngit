'use strict';

function compute_average(collection) {
  return collection.reduce(function (prev,curv) {
    return prev+curv;
    }

  )/collection.length;
}

module.exports = compute_average;

