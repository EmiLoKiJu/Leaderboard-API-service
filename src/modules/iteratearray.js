/* eslint-disable no-use-before-define */

const scoreelementcontainer = document.querySelector('.scoreelementcontainer');
const dochead = document.querySelector('head');

const iteratearray = (arr) => {
  scoreelementcontainer.innerHTML = ' ';
  for (let i = 0; i < arr.length; i += 1) {
    const element = document.createElement('div');
    element.classList.add('nameandscorecontainer');
    element.classList.add('dflex');
    element.classList.add('spacebetween');
    element.classList.add('hidden'); // classname
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
  const hiddenelements = scoreelementcontainer.querySelectorAll('.hidden');
  const stylecontainer = document.createElement('style');
  let stylecontent = '';
  for (let i = 0; i < hiddenelements.length; i += 1) { // child i + 1
    stylecontent += `
    .nameandscorecontainer:nth-child(${i + 1}) {
      transition-delay: ${i * 200}ms;
    }

    `;
  }
  stylecontainer.innerText = stylecontent;
  dochead.appendChild(stylecontainer);

  setTimeout(() => {
    for (let i = 0; i < hiddenelements.length; i += 1) {
      hiddenelements[i].classList.remove('hidden');
      hiddenelements[i].classList.add('nothidden');
    }
  }, 50);
};

export default iteratearray;