/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
 class Game{
     //constructor to initialze values
    constructor() {
        //a counter for missed attempts
        this.missed = 0;
        //array of phrases which are instances of the phrase class
        this.phrases = [
            new Phrase('my code is compiling'),
            new Phrase('javascript is awesome'),
            new Phrase('the eagle has landed'),
            new Phrase('spread love not germs'),
            new Phrase('luke i am your father')
        ];
        //initialize a null active phrase
        //this will hold the value of the phrase the user will try
        //to guess
        this.activePhrase = null;
        
    }
    //helper getter to get the number of the un-guessed(hidden)
    //letters from the phrase
    get notAnswered(){
       return $('li.letter.hide').toArray().length;
    }
    //starts the game
    startGame(){
        //hide the overlay screen with fadeout animation
        $('#overlay').fadeOut();
        //get an random phrase from the list and assign it to 
        //the active variable
        this.activePhrase = this.getRandomPhrase();
        //add the phrase to the screen
        this.activePhrase.addPhraseToDisplay();
        //start to listen to keyboard events 
        $(window).on( 'keyup' , this.handleInteraction.bind(this));
    }
    getRandomPhrase(){
        let index = Math.floor(Math.random()*5);
        return this.phrases[index];
    }
    handleInteraction(event){
        //variable that stores the event type
        const isKeyboard = event.type == 'keyup';
        //get the value of the key pressed on the onscreen or physical keyboard
        const key = isKeyboard?event.key:event.target.innerText;
        //if the key pressed is not a letter do nothing and exit function
        if(isKeyboard && !(/^[a-z]{1}$/i.test(key)))
            return;
        
        if(this.activePhrase.checkLetter(key)){//check if the letter is in the phrase
            this.activePhrase.showMatchedLetter(key);//show the matched letter on screen
            //if the input was from the onscreen keyboard disable it and add a class for styling
            if(!isKeyboard)
                $(event.target).attr('disabled',true).toggleClass('chosen');
            //check if the user won the game
            this.checkForWin();
        }else{
            //if the input was from the onscreen keyboard disable it and add a class for styling
            if(!isKeyboard)
                $(event.target).addClass('wrong');
            this.missed++;//increment the count of missed attempts
            
            if(this.missed == 5) //if the missed count is 5 the user lost so end game
                this.gameOver('lost');
            else
                this.removeLife();//otherwise update the lives the user has
        }

    }


    removeLife(){
       //replace the image to update the lives count
       $('#scoreboard li.tries').last().toggleClass('tries').children('img').attr('src', 'images/lostHeart.png');
    }

    checkForWin(){
        //if the user found all words end the game with a win
        if( this.notAnswered === 0){
            this.gameOver('win');
        }
    }

    gameOver(outcome){
        //remove the keyboard event listener after game is over
        $(window).off('keyup');
        
        //reset game variables and displays
        this.missed = 0;
        $('#phrase ul').children().remove();
        $('#qwerty button').removeClass('chosen wrong').attr('disabled', false);
        $('#scoreboard li').addClass('tries').children().attr('src','images/liveHeart.png');
        
        //if the user won display the overlay screen with a win message
        if(outcome ==='win'){
            $('#overlay').fadeIn().addClass('win').removeClass('lose');
            $('#game-over-message').text('You won!!!');
        }
        //if the user won display the overlay screen with a lose message
        else{
            $('#overlay').fadeIn().addClass('lose').removeClass('win');
            $('#game-over-message').text('You lost');
        }
    }
 }