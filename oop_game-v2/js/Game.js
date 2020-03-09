/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game{

    constructor() {
        this.missed = 0;
        this.phrases = [
            new Phrase('my code is compiling'),
            new Phrase('javascript is awesome'),
            new Phrase('the eagle has landed'),
            new Phrase('spread love not germs'),
            new Phrase('luke i am your father')
        ];
        this.activePhrase = "";
        
    }
    get notAnswered(){
       return $('li.letter.hide').toArray().length;
    }
    startGame(){
        $('#overlay').fadeOut();
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
        $(window).on( 'keyup' , this.handleInteraction.bind(this));
    }
    getRandomPhrase(){
        let index = Math.floor(Math.random()*5);
        return this.phrases[index];
    }
    handleInteraction(event){
        const isKeyboard = event.type == 'keyup';
        console.log(event);
        const key = isKeyboard?event.key:event.target.innerText;
        console.log(isKeyboard);
        if(this.activePhrase.checkLetter(key)){
            this.activePhrase.showMatchedLetter(key);
            if(!isKeyboard)
                $(event.target).attr('disabled',true).toggleClass('chosen');
            this.checkForWin();
        }else{
            if(!isKeyboard)
                $(event.target).addClass('wrong');
            this.missed++;
            if(this.missed == 5) 
                this.gameOver('lost');
            else
                this.removeLife();
        }

    }
    removeLife(){
       $('#scoreboard li.tries').last().toggleClass('tries').children('img').attr('src', 'images/lostHeart.png');
    }
    checkForWin(){
        if( this.notAnswered === 0){
            this.gameOver('win');
        }
    }
    gameOver(outcome){
        $(window).off('keyup');
        this.missed = 0;
        $('#phrase ul').children().remove();
        $('#qwerty button').removeClass('chosen wrong').attr('disabled', false);
        $('#scoreboard li').addClass('tries').children().attr('src','images/liveHeart.png');
        if(outcome ==='win'){
            $('#overlay').fadeIn().addClass('win').removeClass('lose');
            $('#game-over-message').text('You won!!!');
        }
        else{
            $('#overlay').fadeIn().addClass('lose').removeClass('win');
            $('#game-over-message').text('You lost');
        }
    }
 }