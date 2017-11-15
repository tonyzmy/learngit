'use strict';
var rank_desc = function(collection){
  for(let i=0;i<collection.length;i++)
    for(let j=i;j<collection.length;j++)
      if(collection[i]>collection[j])
      {
        let t=collection[i];
        collection[i]=collection[j];
        collection[j]=t;
      }
  return collection;

};

module.exports = rank_desc;
