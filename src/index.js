import './style.css';
import createGame, { getID } from './modules/createGame.js';

const newGame = {
  name: 'throw the chalk at jimmy',
};

const game = JSON.stringify(newGame);

if (!getID()) {
  await createGame(game);
}