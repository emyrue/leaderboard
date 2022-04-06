import { getID } from './createGame.js';

const scoreURL = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${getID()}/scores/`;
