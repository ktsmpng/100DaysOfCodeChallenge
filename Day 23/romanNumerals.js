function convertToRoman(num) {
  //I	V	X	L	C	D	M
  //Value	1	5	10	50	100	500	1,000
  var numeraltable = [
    {one:"I", five: "V"},
    {one: "X",five: "L"},
    {one: "C", five: "D"},
    {one: "M"}
  ]
  var numeralarr = [];
  var tempnum = num.toString();
  for (var i = 0; i < tempnum.length; i++){
    numeralarr.unshift(parseInt(tempnum[i]));
  }
  
  var count = 0;
  var temparr = [];
  var finalarr = [];
  for (var i = 0; i < numeralarr.length ; i++){
    while(count < 4 && count != numeralarr[i]){
      if(numeralarr[i] == 4){
        temparr.push(numeraltable[i].one);
        temparr.push(numeraltable[i].five);
        break;
      }else if(numeralarr[i] == 9){
        temparr.push(numeraltable[i].one);
        temparr.push(numeraltable[i + 1].one);
        break;
      }
      if(numeralarr[i] == 5){
        temparr.push(numeraltable[i].five);
        break;
      }else if(numeralarr[i] > 5){
        temparr.push(numeraltable[i].five);
        numeralarr[i] = numeralarr[i] - 5;
      }else{
        temparr.push(numeraltable[i].one);
        count++;
      }
    }
    count = 0;
    finalarr.unshift(temparr.join(''));
    temparr = [];
  }
  return finalarr.join('');
}

convertToRoman(36);