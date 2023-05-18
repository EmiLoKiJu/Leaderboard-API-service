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
    scorenameelement.innerText = arr[i].name;
    const scorescoreelement = document.createElement('div');
    scorescoreelement.classList.add('scorescoreelement');
    scorescoreelement.innerText = arr[i].score;
    element.innerHTML = `
    <div class="dflex">
      <div class="specificcontainer">
      </div>
    </div>
    `;
    scoreelementcontainer.appendChild(element);
    const specificcontainer = element.querySelector('.specificcontainer');
    specificcontainer.appendChild(scorenameelement);
    specificcontainer.appendChild(scorescoreelement);
  }
};

export default iteratearray;