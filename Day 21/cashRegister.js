function checkCashRegister(price, cash, cid) {
  var changeDue = cash - price;
  var ciddict = [
    { name: "PENNY", unit: 0.01, cid: 0 },
    { name: "NICKEL", unit: 0.05, cid: 0 },
    { name: "DIME", unit: 0.1, cid: 0 },
    { name: "QUARTER", unit: 0.25, cid: 0 },
    { name: "DOLLAR", unit: 1, cid: 0 },
    { name: "FIVE", unit: 5, cid: 0 },
    { name: "TEN", unit: 10, cid: 0 },
    { name: "TWENTY", unit: 20, cid: 0 },
    { name: "ONE HUNDRED", unit: 100, cid: 0 }
  ];
  var returnValue = {status: "" , change: []};

  //Loop through cid and if it doesn't equal 0 update dictionary 
  var total = 0;
  for (var i = 0; i < cid.length; i++) {
    if (cid[i][1] != 0) {
      console.log("Updating dict: " + cid[i][1]);
      ciddict[i].cid = cid[i][1];
      total += cid[i][1];
    }
  }
  console.log("Total: " + Math.round(total * 100)/100);
  console.log(ciddict);
  //Get the total in drawer

  //Loop through ciddict from largest to smallest units
  var changearr = [];
  var count = 0;
  
  for (var i = ciddict.length - 1; i > 0; i--) {
    console.log("Outside " + ciddict[i].unit + "Change Due :" + changeDue);
    while (ciddict[i].cid != 0 && changeDue >= ciddict[i].unit) {
      //While unit is <= changedue then deduct unit from cid until 0
      console.log("Inside Unit: " + ciddict[i].unit + " Name: " + ciddict[i].name + " Count :" + count + " Change Due: " + changeDue);
      console.log(cid[i].cid);
      ciddict[i].cid -= ciddict[i].unit;
      changeDue -= ciddict[i].unit;
      changeDue = Math.round(changeDue * 100)/100;
      count+=1;
    };
    if (count > 0) {
      console.log(count);
      changearr.push([ciddict[i].name, ciddict[i].unit * count]);
      count = 0;
    }
  }
  console.log("Change Array: " + changearr);

  //Have a count and multiply that by the unit update return array
  if (changearr.length > 0){
    returnValue.status = "OPEN";
    returnValue.change = changearr;
  }else if(total == changeDue){ 
    returnValue.status = "CLOSED";
    returnValue.change = cid;
    console.log(returnValue.change);
  }else{
    returnValue.status = "INSUFFICIENT_FUNDS";
  }
  // Here is your change, ma'am.
  console.log(returnValue);
  return returnValue;
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