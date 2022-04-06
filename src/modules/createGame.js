export const setID = (object) => {
  window.localStorage.setItem('id', object.result);
};

export const getID = () => {
  const string = window.localStorage.getItem('id');
  return string.slice(14, 35);
};

const createGame = async (data) => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', {
    method: 'POST',
    body: data,
    headers: {
      'Content-type': 'application/json'
    },
  });
  response.json().then(object => {
    setID(object);
  });
};

export default createGame;