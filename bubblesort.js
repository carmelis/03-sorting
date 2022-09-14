function bubbleSort(array){
    for(let i=0;i<array.length;i++){
        if(array[i]>array[i+1]){
            swap(array, i)
            bubbleSort(array)
        }
     //console.log(array)

    }
    return array
}
function swap(array, i) { //[2,1], 0
    let numeroGuardado =array[i] //2
    //console.log(numeroGuardado)
    array[i] = array[i+1]; //[1,1]
    //console.log(array)
    array[i+1]=numeroGuardado //[1,2]
    return(array)
}



// function swap(array, indice) {
//     [array[indice], array[indice + 1]] = [array[indice + 1], array[indice]]
//   }
  
//   function inOrder(array, indice) {
//     return array[indice+1] && array[indice] <= array[indice+1]
//   }
  
//   function bubbleSort(arr) {
//     for (var j = arr.length; j > 0; j--) {
//       var swapped = false;
//       for (var i = 0; i < j - 1; i++) {
//         if (!inOrder(arr, i)) {
//           swap(arr, i);
//           swapped = true;
//         }
//       }
//       if (!swapped) break;
//     }
//     return arr;
//   }