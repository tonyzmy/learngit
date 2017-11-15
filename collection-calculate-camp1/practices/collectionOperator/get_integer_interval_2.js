'use strict';

function get_integer_interval_2(number_a, number_b) {
	var a=[];
  if(number_a<number_b)
	{
	//自增偶数区间
	for(let j=number_a;j<=number_b;j++)
	{
		if(j%2==0)
		a.push(j);
	}
	}
  else if(number_a>number_b)
	{
	//自减偶数区间
	for(let j=number_a;j>=number_b;j--)
	{
		if(j%2==0)
		a.push(j);
	}
	}
  else 
	{
	//只含此数字的数组
	if(number_a%2==0)
	a.push(number_a);
	}
	return a;
}

module.exports = get_integer_interval_2;
