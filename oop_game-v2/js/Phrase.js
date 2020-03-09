/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase{
    constructor(phrase){
       this.phrase = phrase.toLowerCase();
    }
    addPhraseToDisplay(){

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
     checkLetter(letter){
        return this.phrase.includes( letter.toLowerCase());
     }
     showMatchedLetter(letter){
        const matched = $(`.${letter}.letter`);
        if(!matched.hasClass('show')){
            matched.toggleClass('hide show');
        }
     }
 }