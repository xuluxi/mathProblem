/*
Suppose you're on a game show, and you're given the choice of three doors: Behind one door is a car; behind the others, goats.
You pick a door, say No. 1, and the host, who knows what's behind the doors, opens another door, say No. 3, which has a goat. 
He then says to you, "Do you want to pick door No. 2?" Is it to your advantage to switch your choice?
*/
var arr = [1,0,0];

function choice() {
  return Math.floor(Math.random() * 3);
}

function showSheep(choicedDoor) {
  switch(choicedDoor) {
    case 0:
      return (Math.floor(Math.random() * 2) + 1);
    case 1:
      return 2;
    case 2:
      return 1;
  }
}

function gameStart(){
  var c = choice();
  var s = showSheep(c);
  return changeTo(c, s);
}

function changeTo(choicedDoor, showedDoor) {
  return (3 - choicedDoor - showedDoor)
}

var total = 10000;
var winTimes = 0;
while(total){
  if(gameStart() === 0){
    winTimes++;
  }
  total--;
}

console.log(`If switch choice, play this game 10000 times win ${winTimes} lose ${10000-winTimes}`)

console.log("conclusion: swith choice is twice probability win a car");
