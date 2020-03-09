/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase{

    constructor(phrase){
        //initialize the phrase with the phrase passed in
       this.phrase = phrase.toLowerCase(); 
    }

    //function to add the phrase to the display
    addPhraseToDisplay(){
        //create an list item html element for each letter in the 
        //phrase
       const letters =  this.phrase.split('').map( (letter) => {
            const item = $(document.createElement('li'));
            if(letter == ' '){
                return item.addClass('space').text(letter);
            }else{
                return  item.addClass(`hide letter ${letter}`).text(letter);
            }
        })
        $('#phrase ul').append(letters);
     }

     //function to check if the letter passed is in the phrase
     checkLetter(letter){
        return this.phrase.includes( letter.toLowerCase());
     }

     //show the letter that is in the phrase on the screen
     showMatchedLetter(letter){
        const matched = $(`.${letter}.letter`);
        if(!matched.hasClass('show')){
            matched.toggleClass('hide show');
        }
     }
 }