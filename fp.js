
/*
//1. Write a function called 'tripleFive' which will loop three times using a 'for' loop

var tripleFive = function() {
for (var i = 0; i < 3; i++) {
console.log("Five!");
	}
};

//2. Write a function called 'lastLetter' which takes a single string argument and returns the last character in the string.

var lastLetter = function(str) {
var x = str.slice(-1);
console.log(x);
};

//3. Write a function called 'square' which takes a single argument which is a number, and returns number * number.

var square = function(num){
return num * num;
};

//4. Write a function called 'negate' which takes a single number argument and returns the negative of that number.

var negate = function(num){
return num * -1
};

//5. Write a function called 'toArray' which takes three arguments and returns an array with each of those arguments as items.

function toArray(a, b, c){
  return [a, b, c];
};

//6. Write a function called 'startsWithA' which takes a single string argument and returns true if the given string's first letter is 'A' and false otherwise.

function startsWithA(a){
  return a[0]=="A";
}
  
//7. Write a function called 'excite' which takes a single string argument and returns the given string plus three exclamation marks.

function excite(a){
  return a +"!!!";
}

//8. Write a function called 'sun' which takes a single string argument and returns true if the string contains the word 'sun' within it. You may use the 'indexOf' method that is built-in to strings, or you can do it manually with a 'for' loop.

function sun(a){
	return a.indexOf("sun") >= 0;
    
}

//9. Write a function called 'tiny' which takes a single string argument and returns true if the number is between 0 and 1. 

function tiny(a){
  return a>0 && a<1;
    
}

//10. Write a function called 'getSeconds' which takes a single string argument in the format 'MM:SS' (minutes and seconds) and returns the total number of seconds represented by that timespan.

function getSeconds(a){
  var timeSplit = a.split(":");
  var minutes = parseInt(timeSplit[0]);
  var seconds = parseInt(timeSplit[1]);
  
  return (minutes*60) + seconds;
    
}

*/