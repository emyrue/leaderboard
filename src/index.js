import './style.css';
import createGame, { setID, getID } from './modules/createGame';

const gameURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
const getGame = new Request(gameURL);
const gettingGame = await fetch(getGame);

const newGame = {
  name: 'throw the chalk at jimmy',
};

const game = JSON.stringify(newGame);

createGame(game);

const test = document.createElement('div');
test.textContent = getID();
document.body.appendChild(test);
