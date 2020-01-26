/* Problem1  */

/* function getAvg(arr){
        var somme=0;
    for(var i=0;i<arr.length;i++){
        somme +=arr[i];
    }
   return somme/arr.length;
}
console.log(getAvg([1, 2, 3]))
console.log(getAvg([1, 2, 3, 4, 5]))
console.log(getAvg([4, 3, 3, 4, 5 ,7])) */





/* Problem 2 */

/* function search(arr, num1) {
    for(var i=0; i<arr.length;i++){
        if(num1 == arr[i]){
            return true
            break;
        }
    }
    return false
}

console.log (search([1, 2, 3], 4)) */





/*Problem 3*/

/*  function removeDuplicates(arr)
  {
      let count = 0, present;
      let newarr = [];
    for(let i = 0; i < arr.length; i++){
        present = false;
        for(var j = 0; j < i;j++){
            if(newarr[j] == arr[i]){
                present = true;
                break;
            }
        }
            if(present == false)
             {
                 newarr[count] = arr[i];
                 count++;
            }   
        }
        return newarr;
}
let alo = [1, 2, 3, 3, 4, 5, 7, 8, 9, 0, 3]
 console.log(removeDuplicates(alo))
 */
  





  /* Problem 4 */

 /*  function getMinMax(arr,word){
      var max = arr[0];
      var min = arr[0];
    if(word == "max"){
      for(var i=1;i<arr.length;i++){
          if(arr[i]>max){
              max=arr[i];
          }              
        }
        return max;
      }
      if(word == "min"){
        for(var i=1;i<arr.length;i++){
            if(arr[i]<min){
                min=arr[i];
            }              
          }
          return min;}
  }
  console.log(getMinMax([6,2,3,4,7,2], "max")) */




 /*  Problem 5 */

 /* function shuffle(arr,word){
    let c=[];

        if(word=="right"){
            c[0]=arr[arr.length-1];
            for(let i=0; i<arr.length-1; i++){
                c[i+1]=arr[i];}
        }
        if(word=="left"){
            c[arr.length-1]=arr[0];
            for(let i=1; i<arr.length; i++){
                c[i-1]=arr[i];}
        }
        return c;
    }


    console.log(shuffle([0,1,2,3,4],"left")) */





/* Problem 6
 */
/* function intersect(arr1,arr2){
let c=[];

for(let i=0; i<arr1.length; i++){
    for(let j=0; j<arr2.length; j++){
        if (arr1[i] == arr2[j])
        c[i]=arr1[i];

    }
}
return c;
} 

console.log(intersect([1,2,3],[1,2,3,5,6])) */






/*  Problem 7 */

/* function union(arr1,arr2){
    var c=[];
    let count =0;
    (add the 2 arrays and then removeduplicate)       
        c=[...arr1, ...arr2];
        return c
}
console.log(union([1,2,],[4,5,6,7])) */





/* Problem 8 */

/* function toBinary(num){
    var i=0;
    var num;
    var c=[];
    while(num>0)
    {c[i] = num % 2;
        num=num/2;
        i++;
    }
    return c[i]
}
console.log(toBinary(2))

function hashArray(arr){
    for(var i = 0; i > arr.length; i++){
        var arr1 = arr[toBinary(num)];
    }
    return arr1[i]
} */
