//Length of last word (split, last word, length)

/* function lengthOfLastWord() {
    let input1 = "Hello World";
    let words = input1.split(" ");                 // 1. split into words
    let lastWord = words[words.length - 1];   // 2. last word
    console.log("length of", lastWord, "is", lastWord.length);  // 5                 // 3. its length
}
lengthOfLastWord();
 */

//Handles extra spaces (trim first)
function lengthOfLastWord2(s) {
    let trimmed = s.trim();                  // 1. trim
    let words = trimmed.split(" ");          // 2. split
    let lastWord = words[words.length - 1];  // 3. last word
    return lastWord.length;                  // 4 & 5. length and return
}

console.log(lengthOfLastWord2("   fly me to the moon  ")); // 4



//Example 3
function isAnagram(str1, str2) {
    // 1. Remove spaces and convert all letters to the same case
    let a = str1.toLowerCase();
    let b = str2.toLowerCase();

    // 2. Sort the characters
    let sortedA = a.split("").sort().join("");
    let sortedB = b.split("").sort().join("");

    // 3. Compare sorted strings
    let result = sortedA === sortedB;

    // 4. Return the result
    return result;
}

console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("hello", "world"));   // false
 

 //.to lowercase -> to check lower case of a string
 //.to uppercase -> to check upper case of a string 