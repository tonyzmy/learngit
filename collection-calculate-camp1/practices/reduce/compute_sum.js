'use strict';

function calculate_elements_sum(collection) {
  return collection.reduce(function (prev,curv) {
    return prev+curv;
  })
}

module.exports = calculate_elements_sum;

