// 9. Write a program to check if a string is palindrome or not.

function isPalindrome(str) {
    var str2="";
    // Reverse the string
    for(var i=str.length-1;i>=0;i--)
    {
       str2=str2+str.charAt(i);
    }
    return str === str2;
  }
  console.log(isPalindrome("abcd")); // false
  console.log(isPalindrome("abccba"));// true

// 10.Find the frequency of elements in the array. 

function calculateFrequency(elements) {
    var frequencyCount={}
    for (var j = 0; j < elements.length; j++) {
      let value = elements[j];
      if (frequencyCount[value]) {
        frequencyCount[value]++;// if there is element already exist update its new frequency with the existing frequency
      } else {
        frequencyCount[value] = 1;//if there is no element set its frequency to 1
      }
    }
    return frequencyCount;
  }
  var elements = ["check", "wait", "work", "check", "go"];
  console.log(calculateFrequency(elements));

//11. Remove duplicates from a given unsorted array.  //Take an unsorted array of your choice.

function duplicateRemoval(elements) {
    // Create a new set it will automatically remove repeating element
   const letters = new Set(elements); 
    // Change set into array
    var distinctArray = Array.from(letters);
    return distinctArray;
  }
  var elements = [1, 2, 3, 4, 4, 5, 5];
  console.log(duplicateRemoval(elements));

//12. How to empty an array in JavaScript?

let array = [1, 2, 3, 4, 5];
array = []; // putting the empty array
console.log(array); // Output of this array will be []

// 15. Given a string, reverse each word in the sentence.

 function reverseWords(sentence) {
    // Split the sentence into an array of words
  var words = sentence.split(" ");
  var str="";
  for(var i=0;i<words.length;i++) // will iterate through each word
  {
      var reverse="";
      for(var j=words[i].length-1;j>=0;j--) // will iterate through each index of each word and reverse it
      {
          reverse=reverse+words[i].charAt(j);
      }
      str=str+reverse+" ";
      reverse="";
  }
    return str;
  }
  var input = "Hello world, how are you?";
  console.log(reverseWords(input));
  
