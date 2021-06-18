let characterIndex;
let characters = ["А", "Б", "В", "Г", "Д", "Е", "Ё", "Ж", "З", "И", "Й", "К", "Л", "М", "Н", "О", "П", "Р", "С", "Т", "У", "Ф", "Х", "Ц", "Ч", "Ш", "Щ", "Ъ", "Ы", "Ь", "Э", "Ю", "Я"];
let translated = [["a"], ["b"], ["v"], ["g"], ["d"], ["e", "ye", "je"], ["yo", "jo", "ë"], ["zh"], ["z"], ["i"], ["y", "i", "j"], ["k"], ["l"], ["m"], ["n"], ["o"],["p"],["r"], ["s"], ["t"], ["u"], ["f"], ["kh", "h"], ["ts, c"], ["ch"], ["sh"], ["shch", "sch"], ["hard sign"], ["y"], ["soft sign"], ["e", "è"], ["yu", "ju"], ["ya"],["ja"]];

var db;

window.onload = function initializePage(){
    characterIndex = Math.floor(Math.random() * 33);
    document.getElementById("character").innerHTML = characters[characterIndex];
}

function onFormSubmit(){
    let guess = document.forms["form"]["entered_character"].value;
    if(guess == ""){
        alert("please make a guess");
    }
    
    let guessIndex = getGuessIndex(guess);
    if(guessIndex == characterIndex){
        alert("correct, great job! :)");
    }else{
        alert("incorrect... the correct answer was: " + translated[characterIndex]);
    }
}

function getGuessIndex(guess){
    for(let i = 0; i<translated.length; i++){
        for( let j = 0; j<translated[i].length; j++){
            if(translated[i][j] == guess){
                return i;
            }
        }
    }
}
