/* eslint-disable import/extensions */
import './assets/css/style.css';
import { createGame, createScore, getScores } from './modules/data.js';

const scoreForm = document.querySelector('#score-form');
const scoreContainer = document.querySelector('.score-container');
const refershBtn = document.querySelector('#refresh-btn');

const renderElements = (arr, container) => {
  container.innerHTML = '';
  arr.forEach((element) => {
    container.innerHTML += `<li>${element.user}:  ${element.score}</li>`;
  });
};

const refreshScore = async (id) => {
  let scoreArr = await getScores(id);
  scoreArr = scoreArr.result;
  renderElements(scoreArr, scoreContainer);
};

let id = await createGame('game');
id = id.result.slice(14, 34);
id = 'DvwYcdsHxMwdVNMHWcIf';

scoreForm.addEventListener('submit', async (e) => {
  const user = scoreForm.elements.name.value;
  const score = scoreForm.elements.score.value;
  await createScore(id, user, score);
  e.preventDefault();
});

refreshScore(id);
refershBtn.addEventListener('click', () => {
  refreshScore(id);
});
