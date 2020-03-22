/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

//create an instance of the game class
let game;

//add event listener to the start game button when
//to start the game when clicked
$('#btn__reset').click(
    () => {
        game = new Game();
        game.startGame();
        //add event listener to all letter keys on the screen
        $('#qwerty button').on('click', (event)=> game.handleInteraction(event));
    });

    