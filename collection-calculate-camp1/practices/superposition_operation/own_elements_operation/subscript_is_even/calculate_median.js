'use strict';
var calculate_median = function(a){
  var collection=a.reduce(function (prev,curv,index,array) {
    if(index%2==1)
    {
      prev.push(curv);
      return prev;
    }
    else
      return prev;
  },[])
  for(let i=0;i<collection.length;i++)
    for(let j=0;j<collection.length;j++)
      if(collection[i]>collection[j])
      {
        let t=collection[i];
        collection[i]=collection[j];
        collection[j]=t;
      }
  if(collection.length%2==1)
    return collection[(collection.length-1)/2];
  else
    return (collection[collection.length/2]+collection[collection.length/2-1])/2;
};
module.exports = calculate_median;
