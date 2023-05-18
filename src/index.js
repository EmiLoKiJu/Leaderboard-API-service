import './style.css';

import storageAvailable from './modules/isStorageValid.js';
import { DateTime } from './modules/dateandtime.js';
import iteratearray from './modules/iteratearray';
import createscoreelement from './modules/createscoreelement';

let arrayScores = [];
const isStorage = storageAvailable('localStorage');
const formtoadd = document.querySelector('form');
const scorename = document.querySelector('#name');
const scorescore = document.querySelector('#score');

const addelement = () => {
  createscoreelement(scorename.value, scorescore.value, arrayScores);
  localStorage.setItem('ScoreList', JSON.stringify(arrayScores));
  scorename.value = '';
  scorename.value = '';
  iteratearray(arrayScores);
};

formtoadd.addEventListener('submit', (event) => {
  event.preventDefault();
  if (scorename.value !== '' && scorescore.value !== '') {
    addelement();
  }
});



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