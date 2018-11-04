function addTogether(...args) {
  var total = 0;
  console.log(args);
  if(args.length > 1){
    for(var i in args){
       total = Number.isInteger(args[i]) ? total += args[i]: undefined;
    }
    console.log(total);
    return total;
  }else if(args.length == 1){
    return Number.isInteger(args[0]) ? function(num){
      return Number.isInteger(num) ? num + args[0]: undefined;
    } : undefined;
  }
}

addTogether(2,3);