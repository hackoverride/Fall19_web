let dice = 6;

function rolls(){
  let temp = [Math.floor((Math.random * dice)+1), 
              Math.floor((Math.random * dice)+1), 
              Math.floor((Math.random * dice)+1), 
              Math.floor((Math.random * dice)+1)];
  let min, pos, value;
  
  for (let i = 0; i < temp.length ; i++){
    value += temp[i];
    if ( min < temp[i] ) 
      min = temp[i];
      pos = i;
  }
  return value - temp[pos];



