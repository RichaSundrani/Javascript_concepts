//Reverse the provided string. 

function reverseString(str) {
    var newStr = str.split("");
    var str1="";
    for(var i=1; i<=newStr.length;i++){
      str1 = str1.concat(newStr[newStr.length-i]);
    }
    console.log(str1);
    return str1;
  }
  
  reverseString("Richard");