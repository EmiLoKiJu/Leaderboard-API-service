import './style.css';

import { DateTime } from './modules/dateandtime.js';
import iteratearray from './modules/iteratearray.js';
import { postScore, getScores } from './modules/api.js';
import sorting from './modules/sorting.js';

let arrayScores = [];
const formtoadd = document.querySelector('form');
const scorename = document.querySelector('#name');
const scorescore = document.querySelector('#score');
const refreshbutton = document.querySelector('.refreshbutton');

const refresh = async () => {
  const data = await getScores();
  arrayScores = await data.result;
  arrayScores = sorting(arrayScores);
  iteratearray(arrayScores);
};

const addelement = async () => {
  await postScore(scorename.value, scorescore.value);
  scorename.value = '';
  scorescore.value = '';
  refresh();
};

formtoadd.addEventListener('submit', (event) => {
  event.preventDefault();
  if (scorename.value.trim() !== '') {
    addelement();
  }
});

refreshbutton.addEventListener('click', () => {
  refresh();
});

// Calling the events when loading the document

document.addEventListener('DOMContentLoaded', () => {
  refresh();
});

// Date and time

const datetime = document.querySelector('.dateandtime');
const updateTime = () => {
  const dt = DateTime.now();
  const formattedDate = dt.toFormat('LLL d, yyyy, hh:mm:ss a');
  datetime.innerHTML = formattedDate;
};

setInterval(updateTime, 1000);