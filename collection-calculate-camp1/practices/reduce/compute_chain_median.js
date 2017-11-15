'use strict';

function compute_chain_median(collection) {
  var a = collection.split("->");
  for(let index=0;index<a.length;index++)
  {
      a[index]=parseInt(a[index]);
  }
  for(let i=0;i<a.length;i++)
    for(let j=i;j<a.length;j++)
      if(a[i]>a[j])
      {
        let t=a[i];
        a[i]=a[j];
        a[j]=t;
      }
  console.log(a );
  if(a.length%2==0)
    return (a[a.length/2-1]+a[a.length/2])/2;
  else
    return a[(a.length-1)/2];
}

module.exports = compute_chain_median;
