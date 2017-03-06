let arr = [6,4,8,1,2,9,7,3,5];
let swap = true;
while(swap){
	console.log(arr.toString());
	swap = false;
	for(let j = 1; j < arr.length; j++){
    	if (arr[j-1] > arr[j]){
        	arr.splice(j-1, 0, arr.splice(j,1));
            swap = true;
        }
    }
}
