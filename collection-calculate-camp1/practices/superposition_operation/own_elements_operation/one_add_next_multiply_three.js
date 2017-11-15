'use strict';
function one_add_next_multiply_three(collection){
  for(let i=0;i<collection.length-1;i++)
  {
    collection[i]=3*(collection[i]+collection[i+1]);
  }
  collection.splice(-1,1);
  return collection;
}
module.exports = one_add_next_multiply_three;
