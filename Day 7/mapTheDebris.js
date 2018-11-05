function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  var a = Math.PI * 2;
  var b = Math.pow(earthRadius * arr[0].avgAlt, 3)/GM;
  var c = Math.sqrt(b);
  var orbitalPeriod = Math.round(a * c);
  console.log(b);
  var arrnew = [{}];
  arrnew[0].name = arr[0].name;
  arrnew[0].orbitalPeriod = orbitalPeriod;
  console.log(arrnew);
  return arrnew;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);