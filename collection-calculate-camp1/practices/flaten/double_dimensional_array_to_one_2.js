'use strict';

function double_to_one(collection) {
	var a=[],b=[];
	for(let i=0;i<collection.length;i++)
		a.push(...collection[i]);
	for(let i=0;i<a.length;i++)
	{
		var j;
		for(j=0;j<b.length;j++)
		{
			if(a[i]==b[j])
				break;
		}
		if(j==b.length)
		b.push(a[i]);
	}
	return b;
}

module.exports = double_to_one;
