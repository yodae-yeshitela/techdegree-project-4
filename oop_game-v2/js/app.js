/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

//create an instance of the game class
const game = new Game();

//add event listener to the start game button when
//to start the game when clicked
const gameStart = $('#btn__reset').click(() => game.startGame());

//add event listener to all letter keys on the screen 
const $keys = $('#qwerty button').on('click', game.handleInteraction.bind(game));

 