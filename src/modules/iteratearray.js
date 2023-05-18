/* eslint-disable no-use-before-define */

const scoreelementcontainer = document.querySelector('.scoreelementcontainer');

const iteratearray = (arr) => {
  scoreelementcontainer.innerHTML = ' ';
  for (let i = 0; i < arr.length; i += 1) {
    const element = document.createElement('div');
    element.classList.add('dflex');
    element.classList.add('spacebetween');
    const listelement = document.createElement('div');
    listelement.classList.add('listelement');
    listelement.innerText = arr[i].description;
    element.innerHTML = `
    <div class="dflex">
      <input type="checkbox" class="iscompleted">
      <div class="specificcontainer">
      </div>
    </div>
    <div>
      <img class="icon threedotsicon" src="./img/threedotsicon.png" alt="grabme">
      <img class="icon deleteicon dnone" src="./img/deleteicon.png" alt="delete">
    </div>
    `;
    scoreelementcontainer.appendChild(element);
    const specificcontainer = element.querySelector('.specificcontainer');
    specificcontainer.appendChild(listelement);
  }
};

export default iteratearray;