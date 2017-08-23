function findAverage (inputArr){
  var sum = 0;
  for (let i = 0; i < inputArr.length; ++i){
    sum = sum + inputArr[i];
  }
  //console.log(sum / inputArr.length);
  return (sum / inputArr.length);
}

var sampleArr = [1,2,3,4,5];

findAverage(sampleArr);
