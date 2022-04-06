import './style.css';

const gameURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
const getGame = new Request(gameURL);
const gettingGame = await fetch(getGame);
const text = await gettingGame.text();

const newGame = {
  name: 'throw the chalk at jimmy',
};

const game = JSON.stringify(newGame);

const test = document.createElement('div');
test.textContent = text;
document.body.appendChild(test);
