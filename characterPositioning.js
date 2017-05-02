function countLetters(str){
  var toLower = str.join(" ").toLowerCase();
  //var noSpaces = str.join("").toLowerCase();
  var i = 0;
  for(letter of toLower){
    //console.log(letter)
    if(letter === " "){}
    else if(letters[letter]){
      letters[letter].push(toLower.indexOf(letter, i));
      // console.log(letter);
    }
    else{
      letters[letter] = [];
      letters[letter].push(toLower.indexOf(letter))
    }
    i++;
  }
  return letters;
}

var letters = {};
var sentence = process.argv.splice(2);

console.log(countLetters(sentence));