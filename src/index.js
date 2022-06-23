/* eslint-disable import/extensions */
import './assets/css/style.css';
import { createGame, createScore, getScores } from './modules/data.js';

const scoreForm = document.querySelector('#score-form');
const scoreContainer = document.querySelector('.score-container');
const refershBtn = document.querySelector('#refresh-btn');

let id = await createGame('game');
id = id.result.slice(14, 34);

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

scoreForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const user = scoreForm.elements.name.value;
  const score = scoreForm.elements.score.value;
  await createScore(id, user, score);
  scoreForm.reset();
});

refreshScore(id);
refershBtn.addEventListener('click', () => {
  refreshScore(id);
});
