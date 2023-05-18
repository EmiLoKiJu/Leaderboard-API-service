import './style.css';

import storageAvailable from './modules/isStorageValid.js';
import { DateTime } from './modules/dateandtime.js';
import iteratearray from './modules/iteratearray';


const isStorage = storageAvailable('localStorage');

addEventListener('submit', (event) => {
  event.preventDefault();
  newbook.title = document.querySelector('#title').value;
  newbook.author = document.querySelector('#author').value;
  if (newbook.title !== '' && newbook.author !== '') {
    const newscore = Object.create(score);
    appendNewBook();
  }
});

const addelement = () => {
  createScoreElement(inputElement.value, arrayScores);
  localStorage.setItem('ScoreList', JSON.stringify(arrayScores));
  inputElement.value = '';
  iteratearray(arraylist);
};

// Calling the events when loading the document

document.addEventListener('DOMContentLoaded', () => {
  if (isStorage && JSON.parse(localStorage.getItem('ScoreList')) != null) {
    arrayScores = JSON.parse(localStorage.getItem('ScoreList'));
    iteratearray(arrayScores);
  }
});

// Date and time

const datetime = document.querySelector('.dateandtime');
const updateTime = () => {
  const dt = DateTime.now();
  const formattedDate = dt.toFormat('LLL d, yyyy, hh:mm:ss a');
  datetime.innerHTML = formattedDate;
};

setInterval(updateTime, 1000);