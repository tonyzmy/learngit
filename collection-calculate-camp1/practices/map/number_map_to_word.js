'use strict';
var number_map_to_word = function(collection){
  return collection.map(function(number_a){

    if(number_a>26)
      if(number_a%26==0)
        return String.fromCodePoint(96+parseInt((number_a-1)/26),96+26);
      else
        return String.fromCodePoint(96+parseInt(number_a/26),96+number_a%26);
    else
      return String.fromCodePoint(96+number_a);

    }

  )
};

module.exports = number_map_to_word;
