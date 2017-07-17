function runTime (x, y) {
  this.x = x;  
  this.y = y;
}

function drinkTime (x, y) {
  this.x = x;
  this.y = y;
}

export function LeaderBoard (data) {
  var mainArray = [];
  var runArray = [];
  var drinkArray = [];
  
  for (var i = 0 ; i < data.length ; i++) {

    runArray.push(new runTime(
      data[i].name, 
      data[i].totalRunTime));
      
    drinkArray.push(new drinkTime(
      data[i].name,
      data[i].totalDrinkTime));

  }
  
  mainArray.push(runArray,drinkArray);
  
  return mainArray;
}
