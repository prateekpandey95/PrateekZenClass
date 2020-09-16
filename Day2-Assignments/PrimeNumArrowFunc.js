let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

let primeNum = arr.filter((a) => {
	for(let i = 2; i < a; i++)
    if(a % i === 0) return false;
  return a >1;

})


console.log(primeNum);



