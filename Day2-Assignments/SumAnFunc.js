let arr = [1,3,2,5,4,7,6,87];

var result = function(a){
	
	let sum = 0;
	for(i= 0; i<a.length;i++)
	{
		sum = sum + a[i];
		
	}

	return sum;
}

console.log(result(arr));