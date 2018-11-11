function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  var arrnew = [];

  for (var i = 0; i < arr.length;i++){
    var a = Math.PI * 2;
    var b = Math.pow(earthRadius + arr[i].avgAlt, 3)/GM;
    var c = Math.sqrt(b);
    var orbitalPeriod = Math.round(a * c);
    arrnew.push({});
    arrnew[i].name = arr[i].name;
    arrnew[i].orbitalPeriod = orbitalPeriod;
  }
  
  return arrnew;
}