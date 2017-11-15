'use strict';

function hybrid_operation_to_uneven(collection) {
  return collection.reduce(function (prev,curv) {
    if(curv%2==1)
      return prev+curv*3+5;
    else
      return prev;
  },0)
}

module.exports = hybrid_operation_to_uneven;

