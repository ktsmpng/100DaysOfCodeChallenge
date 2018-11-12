function palindrome(str) {
  var reversedarr = str.toLowerCase().split(/[\W_]/g).reverse().join(''); 
  return str.toLowerCase().split(/[\W_]/g).join('') == reversedarr;
}



palindrome("eye");