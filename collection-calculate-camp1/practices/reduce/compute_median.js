'use strict';

function compute_median(collection) {
  var a=collection;
  for(let i=0;i<a.length;i++)
    for(let j=i;j<a.length;j++)
      if(a[i]>a[j])
      {
        let t=a[i];
        a[i]=a[j];
        a[j]=t;
      }
  if(a.length%2==0)
    return (a[a.length/2-1]+a[a.length/2])/2;
  else
    return a[(a.length-1)/2];
}

module.exports = compute_median;


