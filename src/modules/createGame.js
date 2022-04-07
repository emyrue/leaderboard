export const setID = (object) => {
  window.localStorage.setItem('id', object.result);
};

export const getID = () => {
  let string = '';
  if (window.localStorage.getItem('id')) {
    string = window.localStorage.getItem('id').slice(14, 35);
  }
  return string;
};

const createGame = async (data) => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', {
    method: 'POST',
    body: data,
    headers: {
      'Content-type': 'application/json',
    },
  });
  response.json().then((object) => {
    setID(object);
  });
};

export default createGame;