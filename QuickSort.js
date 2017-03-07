let nums = [33,554,657,912,121,221,6654,448,4,87,10,101,785,15,400,365];

const partitionAndRecurse = (array, startIdx, endIdx) => {
    let p=startIdx;
	if(startIdx != endIdx){
    	for(let i = startIdx; i < endIdx; i++){
        	if(array[i] < array[p] && i > p){
            	// shift array[i] to left of pivot and increment pivot
            	array.splice(p,0,array.splice(i,1)[0]);
                p++; i--;
            }
        }
        // left of pivot
        if(startIdx !== p) {
        	partitionAndRecurse(nums, startIdx, p);
        }
        // right of pivot
        if ( ++p != endIdx) {
        	partitionAndRecurse(nums, p, endIdx);
        }
    }
};

partitionAndRecurse(nums, 0, nums.length);
console.log(nums.toString());
