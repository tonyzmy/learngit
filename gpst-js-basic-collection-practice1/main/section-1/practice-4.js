'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
          var a=[];
	  for(let i=0;i<collectionA.length;i++)
		for(let j=0;j<objectB.value.length;j++)
			if(collectionA[i].key==objectB.value[j])
				a.push(collectionA[i].key);
	  return a;
}
