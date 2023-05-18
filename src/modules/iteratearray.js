/* eslint-disable no-use-before-define */

const scoreelementcontainer = document.querySelector('.scoreelementcontainer');

const iteratearray = (arr) => {
  scoreelementcontainer.innerHTML = ' ';
  for (let i = 0; i < arr.length; i += 1) {
    const element = document.createElement('div');
    element.classList.add('dflex');
    element.classList.add('spacebetween');
    const scorenameelement = document.createElement('div');
    scorenameelement.classList.add('scorenameelement');
    scorenameelement.innerText = arr[i].user;
    const scorescoreelement = document.createElement('div');
    scorescoreelement.classList.add('scorescoreelement');
    scorescoreelement.innerText = arr[i].score;
    scoreelementcontainer.appendChild(element);
    element.appendChild(scorenameelement);
    element.appendChild(scorescoreelement);
  }
};

export default iteratearray;