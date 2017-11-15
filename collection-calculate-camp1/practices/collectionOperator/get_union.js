'use strict';

function get_union(number_a, number_b) {
 for(let i=0;i<number_b.length;i++)
	{
		//两种方法，一种设置lag标志是否找到，一种根据j循环次数判断是否重复，第二种更好，节省空间
		var j=0;
		for( j=0;j<number_a.length;j++)
			if(number_b[i]==number_a[j])
			{
				//lag=1;
				break;
			}
		if(j==number_a.length)
			number_a.push(number_b[i]);
	}
	return number_a;
}

module.exports = get_union;

