function countLetters(str){
  var noSpaces = str.join("").toLowerCase();
  for(letter of noSpaces){
    //console.log("a")
    if(letters[letter]){
      letters[letter] ++;
      //console.log(letters[letter]);
    }
    else
      letters[letter] = 1;
  }
  return letters;
}

var letters = {};

var sentence = process.argv.splice(2);

console.log(countLetters(sentence));