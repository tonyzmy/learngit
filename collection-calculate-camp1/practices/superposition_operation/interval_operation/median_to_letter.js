'use strict';

function median_to_letter(collection) {
 for(let i=0;i<collection.length;i++)
   for(let j=i;j<collection.length;j++)
     if(collection[i]>collection[j]) {
       let t = collection[j];
       collection[j] = collection[i];
       collection[i] = t;
     }
  if(collection.length%2==0)
  {
    let a=Math.ceil((collection[collection.length/2]+collection[collection.length/2-1])/2);
    if(a>26)
      if(a%26==0)
        return String.fromCharCode(96+a/26-1,96+26);
      else
        return String.fromCharCode(96+a/26,96+a%26);
    else
      return String.fromCharCode(96+a);
  }
  else
  {
    let a=collection[(collection.length-1)/2];
    if(a>26)
      if(a%26==0)
        return String.fromCharCode(96+a/26-1,96+26);
      else
        return String.fromCharCode(96+a/26,96+a%26);
    else
      return String.fromCharCode(96+a);
  }
}

module.exports = median_to_letter;
