function split(wholeArray) {
    const half= Math.floor(wholeArray.length/2)
    let firstHalf= wholeArray.slice(0, half)
    let secondHalf= wholeArray.slice(half)

    return [firstHalf, secondHalf];

  }


function merge(array1, array2){
    const newArray=[]
    let i = 0
    let j = 0
    while(array1.length || array2.length){     
        if(array1[i]<array2[j] || !array2[j]){
         newArray.push(array1[i])
         i++
        }else{
            newArray.push(array2[j])
            j++
        }
    }
    return newArray
}

function mergeSort(array) {
    if(array.length===1){
        return array
    }
   const[array1, array2]= split(array)
   return merge(mergeSort(array1), mergeSort(array2)) //recursion
  
} 
/*
[4,7,5,3,1,6,2,8]
[4,7,5,3],[1,6,2,8]
[4,7][5,3][1,6][2,8]
[4] [7] [5] [3] [1] [6] [2] [8]
[4,7]*/




// function split(wholeArray) {
//     var half = Math.floor(wholeArray.length / 2);
//     var firstHalf = wholeArray.slice(0, half);
//     var secondHalf = wholeArray.slice(half);

//     return [firstHalf, secondHalf];
// }

// function merge(arr1, arr2) {
//     var i1 = 0;
//     var i2 = 0;
//     var mergedArr = [];
//     while (i1 < arr1.length || i2 < arr2.length) {
//         if (arr1[i1] < arr2[i2] || !arr2[i2]) {
//             mergedArr.push(arr1[i1]);
//             i1++;
//         } else {
//             mergedArr.push(arr2[i2]);
//             i2++;
//         }
//     }
//     return mergedArr;
// }

// function mergeSort(arr) {
//     if (arr.length <= 1 ) return arr;
//     var [arr1, arr2] = split(arr);
//     return merge(mergeSort(arr1), mergeSort(arr2)); //recursion
// }