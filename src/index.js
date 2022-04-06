import './style.css';
import createGame, { getID } from './modules/createGame.js';
import addScore, { getScores } from './modules/addScore.js';
import Scores from './modules/scores.js';
import createList from './modules/createList';

const newGame = {
  name: 'throw the chalk at jimmy',
};

const game = JSON.stringify(newGame);
const list = document.getElementById('scores');

if (!getID()) {
  await createGame(game);
}

getScores().then(result => createList(result.result, list));