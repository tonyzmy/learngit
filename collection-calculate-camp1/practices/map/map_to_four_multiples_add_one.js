'use strict';
var map_to_four_multiples_add_one = function(collection){
  let map2 = collection.map(i =>( i*4+1));
  return map2;
};

module.exports = map_to_four_multiples_add_one;
