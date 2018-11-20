function checkCashRegister(price, cash, cid) {
  var changeDue = Math.round((cash - price) * 100)/100;
  var ciddict = [
    { name: "PENNY", unit: 0.01, cid: 0 },
    { name: "NICKEL", unit: 0.05, cid: 0 },
    { name: "DIME", unit: 0.1, cid: 0 },
    { name: "QUARTER", unit: 0.25, cid: 0 },
    { name: "ONE", unit: 1, cid: 0 },
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
      ciddict[i].cid = cid[i][1];
      total += cid[i][1];
    }
  }
  total = Math.round(total * 100)/100;

  //Check if total change in drawer equates to changedue
  if(total == changeDue){ 
    //if this is true there is no need to continue to checking relevant change.
    //it will just update with the following variables and return the final object
    returnValue.status = "CLOSED";
    returnValue.change = cid;
    return returnValue;
  }
  
  var changearr = [];
  var count = 0;
  
  //Loop through ciddict from largest to smallest units
  
  for (var i = ciddict.length - 1; i >= 0; i--) {
    //This will loop through each of the units in the dictionary
    while (ciddict[i].cid > 0 && ciddict[i].unit <= changeDue){
      //If the unit is less than the changeDue and cash in drawer of this unit isnt empty it will deduct until it equates to 
      //zero and move to the next unit of change. This will continue till the relevant change is taken.
      //A count is incremented for the amount of times the unit of change is taken this will me used to update the final change array
      changeDue = changeDue - ciddict[i].unit;
      changeDue = Math.round(changeDue * 100)/100;
      ciddict[i].cid = ciddict[i].cid - ciddict[i].unit;
      count = count + 1;
    }
    //At this point this will update the changearr and set the count back to zero for the next unit
    if (count > 0){
      changearr.push([ciddict[i].name ,ciddict[i].unit * count]);
      count = 0;
    }
  }

  //If the changearr has been updated and changeDue = 0 it means that there is sufficient change
  //Else there is insufficient change
  
  if (changearr.length > 0 && changeDue == 0){
    returnValue.status = "OPEN";
    returnValue.change = changearr;
  }else{
    returnValue.status = "INSUFFICIENT_FUNDS";
    returnValue.change = [];
  }

  // Here is your change, ma'am.
  return returnValue;
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);