function telephoneCheck(str) {
  //filter out everything besides numbers
  //if the first number starts with - then start point is at index one.
  var filtered = str[0] == '-' ? str[1,str.length -1].replace(/[^0-9()]/g , ''):str.replace(/[^0-9()]/g , '');

  //check that the length of the string is greater than 11 or equal to 13 because valid numbers are minimum 10 digits without any brackets. In the instance where it is greater than eleven there only possible scenarios of where brackets reside 
  //(1) Index 0 and 4 if length of string equals 12
  //(2) Index 1 and 5 if length is greater which means that there is country code which has to equal to one.
  if(filtered.length <= 13 && filtered.length > 11){
    return filtered[0] == 1 && (filtered[1] == '(' && filtered[5] == ')' )||(filtered[0] == '(' && filtered[4] == ')' ) && filtered.length ==12;
  }else if(filtered.length == 11){
    return filtered[0] == 1;
  }else if(filtered.length == 10){
    return true;
  }else{
    return false;
  }
}

telephoneCheck("555-555-5555");