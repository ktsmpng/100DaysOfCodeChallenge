function telephoneCheck(str) {
  // Good luck!
  //filter out everything besides numbers
  var filtered = str.replace(/[^0-9()]/g , '');
  console.log(filtered);
  //checkk that the length of the string is less than 11 or equal to 10
  if(filtered.length <= 13 && filtered.length > 11){
    return filtered[0] == 1 && (filtered[1] == '(' && filtered[5] == ')' )||(filtered[0] == '(' && filtered[4] == ')' );
  }else if(filtered.length == 11){
    return filtered[0] == 1;
  }else if(filtered.length == 10){
    return true;
  }else{
    return false;
  }
}

telephoneCheck("555-555-5555");