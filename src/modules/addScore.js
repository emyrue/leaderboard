const key = 'zRNV29Vwiw2Q5Vnvo5gE'

const scoreURL = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${key}/scores/`;

const addScore = async (object) => {
  const newScore = await fetch(scoreURL, {
    method: "POST",
    body: object,
    headers: {
      'Content-type': 'application/json',
    },
  });
  newScore.json().then(result => console.log(result.result));
};

export default addScore;