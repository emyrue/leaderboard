import './style.css';
import createGame, { getID } from './modules/createGame.js';
import addScore from './modules/addScore.js';
import Scores from './modules/scores.js';

const newGame = {
  name: 'throw the chalk at jimmy',
};

const game = JSON.stringify(newGame);

if (!getID()) {
  await createGame(game);
}

const newScore = JSON.stringify(new Scores('Emily', 350));

addScore(newScore);