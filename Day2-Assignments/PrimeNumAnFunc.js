let arr = [1,3,2,5,4,7,6,87];

var result = function(a){
	let prime = [];
	for(let i = 2; i < a; i++)
	{
		if(a % i === 0) 
		{
			
		}
		else
		{
			prime.push(a[i]);
		}
	}

	return prime;
  
}

console.log(result(arr));