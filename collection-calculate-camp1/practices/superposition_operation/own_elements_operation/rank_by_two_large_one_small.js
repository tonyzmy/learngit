'use strict';
function rank_by_two_large_one_small(collection){
  for(let i=0;i<collection.length-1;i++)
    for(let j=i+1;j<collection.length;j++)
      if(collection[i]>collection[j])
      {
        let t=collection[i];
        collection[i]=collection[j];
        collection[j]=t;
      }
  if(collection.length%3==0)
  for(let i=0;i<collection.length-1;i=i+3)
  {
    let  t=collection[i];
    collection[i]=collection[i+1];
    collection[i+1]=collection[i+2];
    collection[i+2]=t;
  }
  else
    for(let i=0;i<collection.length-3;i=i+3)
    {
      let  t=collection[i];
      collection[i]=collection[i+1];
      collection[i+1]=collection[i+2];
      collection[i+2]=t;
    }
  return collection;
}
module.exports = rank_by_two_large_one_small;
