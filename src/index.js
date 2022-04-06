import './style.css';
import createGame, { getID } from './modules/createGame.js';
import addScore, { getScores, createScore } from './modules/addScore.js';
import createList from './modules/createList.js';

const newGame = {
  name: 'throw the chalk at jimmy',
};

const game = JSON.stringify(newGame);
const list = document.getElementById('scores');
const form = document.querySelector('.form');
const userName = document.getElementById('user-name');
const userScore = document.getElementById('user-score');
const refresh = document.querySelector('.refresh');

if (getID()) {
  await createGame(game);
}

getScores().then((result) => createList(result.result, list));

form.addEventListener('submit', (e) => {
  e.preventDefault();
  addScore(JSON.stringify({
    user: userName.value,
    score: userScore.value,
  }));
  createScore(userName.value, userScore.value, list);
});

refresh.addEventListener('click', () => {
  getScores().then((result) => createList(result.result, list));
});