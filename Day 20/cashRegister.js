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

  //Loop through cid and if it doesn't equal 0 update dictionary 
  var total = 0;
  for (var i = 0; i < cid.length; i++) {
    if (cid[i][1] != 0) {
      ciddict[i].cid = cid[i][1];
      total += cid[i][1];
    }
  }
  console.log("Total: " + total);
  console.log(ciddict);
  //Get the total in drawer

  //Loop through ciddict from largest to smallest units
  var changearr = [];
  var count = 0;
  console.log("Outside " + ciddict[ciddict.length - 1].unit + "Change Due :" + changeDue);
  for (var i = ciddict.length - 1; i > 0; i--) {
    while (ciddict[i].cid != 0 && changeDue >= ciddict[i].unit) {
      //While unit is <= changedue then deduct unit from cid until 0
      console.log("Inside Unit: " + ciddict[i].unit + " Name: " + ciddict[i].name + " Count :" + count);
      console.log(cid[i].cid);
      ciddict[i].cid -= ciddict[i].unit;
      changeDue - ciddict[i].unit;
      count+=1;
    };
    if (count > 0) {
      console.log(count);
      changearr.push(ciddict[i].name + ciddict[i].unit * count);
      count = 0;
    }
  }
  console.log("Change Array: " + changearr);

  //Have a count and multiply that by the unit update return array

  // Here is your change, ma'am.
}
