'use strict';

module.exports = function countSameElements(collection) {
	        var a=[{key:'a' ,count:0}];
		for(let i=0;i<collection.length;i++)
		{
			var lag=0;
			for(let j=0;j<a.length;j++)
			if(collection[i]==a[j].key)
				{
					
				   a[j].count++;
				   lag=1;
				   continue;
				}
			if(lag!=1)
			a.push({key:collection[i],count:1});
		}
		return a;
}
