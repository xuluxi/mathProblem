/**
 In a country in which people only want boys every family continues to have children until they have a boy. 
 If they have a girl, they have another child. If they have a boy, they stop. What is the proportion of boys to girls in the country?
*/


var num = 10000,
    genaNum = 10,
    boyNum = 0,
    girlNum = 0;

function born() {
  return Math.random() < 0.5 ? "boy" : "girl"
}

function family() {
  if(born() === "boy"){
    boyNum++;
    return;
  } else {
    girlNum++;
    arguments.callee.call(null);
  }
}

function genation() {
  while(num) {
    family();
    num--;
  }
  var p = parseFloat(girlNum/boyNum);
  console.log(`proportion of boys to girls is ---> 1 : ${p}`);
}

while(genaNum) {
  genation();
  num = 10000;
  boyNum = 0;
  girlNum = 0;
  genaNum--;
}

console.log("conclusion: the proportion of boys to girls is 1:1");
