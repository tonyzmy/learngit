'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
   var a=[];
	  for(let i=0;i<collectionA.length;i++)
		for(let j=0;j<collectionB[0].length;j++)
			if(collectionA[i]==collectionB[0][j])
				a.push(collectionA[i]);
	  return a;
}
