'use strict';

function get_letter_interval(number_a, number_b) {
  	var a=[];
  if(number_a<number_b)
	{
	//自增字母区间
	for(let j=number_a;j<=number_b;j++)
	{
		
		a.push(String.fromCodePoint(96+j));
	}
	}
  else if(number_a>number_b)
	{
	//自减字母区间
	for(let j=number_a;j>=number_b;j--)
	{
		
		a.push(String.fromCharCode(96+j));
	}
	}
  else 
	{
	//只含此数字对应字母的数组
	
		a.push(String.fromCharCode(96+number_a));
	}
	return a;
}

module.exports = get_letter_interval;
