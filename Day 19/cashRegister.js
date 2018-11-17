function checkCashRegister(price, cash, cid) {
  var change = cash - price;
  var ciddict =[
    ["PENNY", 0.01],
    ["NICKEL", 0.05],
    ["DIME", 0.1],
    ["QUARTER", 0.25],
    ["ONE", 1],
    ["FIVE", 5],
    ["TEN", 10],
    ["TWENTY", 20],
    ["ONE HUNDRED", 100]
  ];
  var changeObject = {status: "", change: []};
  //Check get cid and update new dict with amount of coins
  var cidtotal = 0;
  for (var i = 1; i < cid.length; i++) {
    cidtotal += cid[i][1];
  }
  console.log("CID: " + cidtotal);

  //Check change if sufficient and return array if true else returns -1 
  function checkChange() {
    var changearr = [];
    var changedue = change;
    for (var i = cid.length - 1; i > 0; i--) {
      while (cid[i][1] > 0 && cid[i][1] < changedue){
        if (cid[i][1] > changedue) {
          var remainder = cid[i][1] - changedue;
          changearr.push([cid[i][0], remainder]);
        }else{
          changearr.push([cid[i][0], cid[i][1]]);
          cid[i][1] -= cid[i][1];
          changedue -= cid[i][1];
        }
      }
    }
    console.log(changearr);
    return changearr.length > 0 ? changearr : -1;
  }
  console.log("change: " + checkChange());

  // Here is your change, ma'am.
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.1],
// ["QUARTER", 4.25],
// ["ONE", 90],
// ["FIVE", 55],
// ["TEN", 20],
// ["TWENTY", 60],
// ["ONE HUNDRED", 100]]

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);


  //Units for change match what needs to be returned 
  if (cidtotal >= change && checkChange(change) != -1) {
    //check if cid has sufficient units of change
    console.log(checkChange(change));
  } else if (cidtotal == change) {
  }

  console.log(ciddict)
  // Here is your change, ma'am.
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.1],
// ["QUARTER", 4.25],
// ["ONE", 90],
// ["FIVE", 55],
// ["TEN", 20],
// ["TWENTY", 60],
// ["ONE HUNDRED", 100]]

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);