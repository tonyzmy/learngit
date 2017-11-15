'use strict';

function amount_even(collection) {
  return collection.reduce(function (perv,curv) {
    if(curv%2==0)
      return perv+curv;
    else
      return perv;
  },0);
}

module.exports = amount_even;
