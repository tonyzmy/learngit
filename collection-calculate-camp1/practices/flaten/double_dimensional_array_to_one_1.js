'use strict';

function double_to_one(collection) {
	var a=[1];
	for(let i=1;i<collection.length;i++)
		a.push(...collection[i]);
	return a;
}

module.exports = double_to_one;
