'use strict';

function hybrid_operation(collection) {
  return collection.reduce(function (prev,curv) {
    return prev+curv*3+2
  },0)
}

module.exports = hybrid_operation;

