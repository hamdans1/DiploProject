let countries = ['austria', 'england', 'russia', 'italy', 'france', 'germany', 'turkey'];
let players = ['sami', 'memoli', 'holler', 'ryan', 'gerard', 'eric', 'dom'];
let games = [];

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  while (0 !== currentIndex) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function gameBuilder(ary, ary2,gameAry){
  let game = {};
  let playAry = shuffle(ary);
  let countryAry = shuffle(ary2);
  for (let i = 0; i < ary.length; i++){
    game[playAry[i]] = countryAry[i];
  }
  return gameAry.push(game);

}


function gameChecker(k, v, ary){
  for (var i = 0; i < ary.length; i++){
    if (ary[i][k] === v){
      return false;
    } else {
      return true;
    }
  }
}

/*function gameBuilder(ary, ary2, gameAry){
  let game = {};
  let playAry = shuffle(ary);
  let countryAry = shuffle(ary2);
  for (let i = 0; i < ary.length; i++){
    if (gameChecker(playAry[i], countryAry[i], gameAry)){
      game[playAry[i]] = countryAry[i];
    } else if (gameChecker(playAry[i], countryAry[i+1], gameAry)){
      game[playAry[i]] = countryAry[i+1];
    } else if (gameChecker(playAry[i], countryAry[i+2], gameAry)){
      game[playAry[i]] = countryAry[i+2];
    } else if (gameChecker(playAry[i], countryAry[i+3], gameAry)){
      game[playAry[i]] = countryAry[i+3];
    } else if (gameChecker(playAry[i], countryAry[i+4], gameAry)){
      game[playAry[i]] = countryAry[i+4];
    } else if (gameChecker(playAry[i], countryAry[i+5], gameAry)){
      game[playAry[i]] = countryAry[i+5];
    }
  }
  return game;

}
*/


const game1 = gameBuilder(players, countries, games);
const game2 = gameBuilder(players, countries, games);
const game3 = gameBuilder(players, countries, games);
const game4 = gameBuilder(players, countries, games);
const game5 = gameBuilder(players, countries, games);
const game6 = gameBuilder(players, countries, games);
const game7 = gameBuilder(players, countries, games);

console.log(games);
