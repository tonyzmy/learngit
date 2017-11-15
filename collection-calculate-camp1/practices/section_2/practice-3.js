'use strict';

module.exports = function countSameElements(collection) {
       var a=[{name:'a' ,summary:0}];
		for(let i=0;i<collection.length;i++)
		{
			var lag1=0,lag2=0;
			if(collection[i].length==1)
			{
				for(let j=0;j<a.length;j++)
				if(collection[i]==a[j].name)
					{
					
					   a[j].summary++;
					   lag1=1;
					   continue;
					}
				if(lag1!=1)
				a.push({name:collection[i],summary:1});

			}
			if(collection[i].length>1)
				{
					var num=0;
				if(collection[i].charAt(1)==':'||collection[i].charAt(1)=='-')
				num=parseInt(collection[i].substring(2,collection[i].length));
				else
				num=parseInt(collection[i].substring(2,collection[i].length-1));

					for(let k=0;k<a.length;k++)
					{
						if(collection[i].charAt(0)==a[k].name)
						{
							a[k].summary+=num
							lag2=1;
							continue;
						}
					}
					if(lag2!=1)
                   a.push({name:collection[i].charAt(0),summary:num});
						
				}				
		}

		return a;
}
