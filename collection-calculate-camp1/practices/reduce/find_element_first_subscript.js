'use strict';

function calculate_elements_sum(collection, element) {
  function Array_indexof(collection,element)
  {
    for(let i=0;i<collection.length;i++)
      if(collection[i]==element)
        return i;
  }
  return Array_indexof(collection,element);
}

module.exports = calculate_elements_sum;

