let dice = 6;

function rolls(){
  let temp = [Math.floor((Math.random * dice)+1), 
              Math.floor((Math.random * dice)+1), 
              Math.floor((Math.random * dice)+1), 
              Math.floor((Math.random * dice)+1)];
  let min = 20, pos, value;
  
  for (let i = 0; i < temp.length ; i++){
    value += temp[i];
    if ( min < temp[i] ) 
      min = temp[i];
      pos = i;
  }
  return value - temp[pos];

let diceRolls = [18][1];
  
for (let i = 0; i < 10000; i++ ){

    diceRolls[rolls()][0]++;

}

