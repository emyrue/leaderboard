const createList = (array, element) => {
  array.forEach((listItem) => {
    const newItem = document.createElement('li');
    newItem.textContent = `${listItem.user}: ${listItem.score}`;
    element.appendChild(newItem);
  });
};

export default createList;