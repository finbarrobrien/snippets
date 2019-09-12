let arr = [6,4,8,1,2,9,7,3,5];
let swap = true;
console.log(arr.toString());


const sort = (A) => {
    if(A.length > 1){
        return merge(sort(A.slice(0,A.length / 2)), sort(A.slice(A.length / 2)));
    } else {
        return A;
    }
}

/**
 * Merge the elems from A1 and A2 in ascending order
 * 
 * @param {*} A1 
 * @param {*} A2 
 */
const merge = (A1, A2) => {
    let i =0; let j = 0;
    let out = [];
    while(i < A1.length || j < A2.length) {
        if (i === A1.length){
            out.push(A2[j]);
            j++;
        } else {
            if(j === A2.length || A1[i] < A2[j]){
                out.push(A1[i]);
                i++;
            } else {
                out.push(A2[j]);
                j++;
            }
        }
    }
    return out;
}

let out = sort(arr);
console.log(out);