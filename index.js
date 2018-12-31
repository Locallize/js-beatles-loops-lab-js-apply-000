// add solutio
var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
function theBeatlesPlay(musicians, instruments) {
  var a = [];
  
  for (var i = 0; i < musicians.length; i++){
    a.push(`${musicians[i]} plays ${instruments[i]}`) ;
  }
  return a;
}

var facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice",
];

function johnLennonFacts(facts){
  var i = 0;
  var b = [];
  
  while(i < facts.length){
    b.push(`${facts[i]}!!!`);
    i++;
  }
  return b;
}

function iLoveTheBeatles(numbers){
  var beatle = "I love the Beatles!";
  var c = [];
    do{
      c.push("I love the Beatles!");
      numbers++;
    }while(numbers>15);
    
  return c;
}
