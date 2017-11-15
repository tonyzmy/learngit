'use strict';

function average_uneven(collection) {
  var a=0;
  return collection.reduce(function (perv,curv) {
    if(curv%2==1)
    {
      a++;
      return perv+curv;
    }

    else
      return perv;
  },0)/a;
}

module.exports = average_uneven;
