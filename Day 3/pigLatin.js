function translatePigLatin(str) {
  var arr = str.split('');
  var first = arr[0];
  var vowels = new RegExp(/[aeiou]/);
  
  if (vowels.test(first)){
    //If the first letter is a vowel
    arr.push("way");
    return arr.join('');
  }else if(vowels.test(str) == false){
    //If string contains no vowels
    return str + "ay";
  }else{
    //Finds the first vowel that is in String
    //Uses the index of the first vowel to splice string into substrings and concat result.
    var first_vowel = arr.find((letter) => {
      return vowels.test(letter);
    });
    return str.substr(str.indexOf(first_vowel)) + str.substr(0, str.indexOf(first_vowel)) + "ay";
  }
}
