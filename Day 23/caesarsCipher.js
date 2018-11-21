function rot13(str) { // LBH QVQ VG!
  return str.split('').map((a)=>{
      if (a.charCodeAt(0) > 64 && a.charCodeAt(0) < 91){
          return a.charCodeAt(0) > 77 ? String.fromCharCode(a.charCodeAt(0)  - 13) : String.fromCharCode(a.charCodeAt(0) + 13);
      }else{
          return a;
      }
  }).join('');
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");