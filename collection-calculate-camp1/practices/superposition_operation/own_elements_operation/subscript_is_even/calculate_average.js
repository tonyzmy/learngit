'use strict';
var calculate_average = function(collection){
  return collection.reduce(function (prev,curv,index,array) {
    if(index%2==1)
      return prev+curv;
    else
      return prev;
  },0)/parseInt(collection.length/2);
};
module.exports = calculate_average;
