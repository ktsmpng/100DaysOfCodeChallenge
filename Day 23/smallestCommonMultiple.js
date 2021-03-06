function smallestCommons(arr) {

  //sort order of array from smallest to greatest
  var arrsort = arr.sort((a, b)=> {return b - a});
  
  //create a list of all number within the range
  var rangeArr = [];
  for (var i = arrsort[0]; i >= arrsort[1]; i--){
    rangeArr.push(i);
  }

  //Variable which will be used to check if it is the common multiple between all variables in the range.
  var commonN = parseInt(rangeArr[0]) * parseInt(rangeArr[1]);

  //Check multpiles from largest to smallest and checking if LCM between all numbers in the range.
  var count = rangeArr[1];
  while(rangeArr.every((a)=>{return commonN % a == 0;}) == false){
    commonN = rangeArr[0] * count;
    count++;
  }

  return commonN;
}



smallestCommons([1,5]);