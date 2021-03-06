const key = 'CAHkUfLTvE7q34kYsV8P';

const scoreURL = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${key}/scores/`;

const addScore = async (object) => {
  await fetch(scoreURL, {
    method: 'POST',
    body: object,
    headers: {
      'Content-type': 'application/json',
    },
  });
};

export default addScore;

export const getScores = async () => {
  const allScores = await fetch(scoreURL);

  return allScores.json();
};

export const createScore = (user, score, element) => {
  const newElement = document.createElement('li');
  newElement.textContent = `${user}: ${score}`;
  element.appendChild(newElement);
};