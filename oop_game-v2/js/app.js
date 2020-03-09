/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


const game = new Game();

const gameStart = $('#btn__reset').click(() => game.startGame());

const $keys = $('#qwerty button').on('click', game.handleInteraction.bind(game));

 