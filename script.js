let item = 1, array = Array();

function addWord() {
    let word = document.getElementById('txtAdd').value, wordLowerCase = word.toLowerCase();
    let alreadyExistsElement = array.some(element => element.includes(wordLowerCase));
    if (alreadyExistsElement == false) {
        if (wordLowerCase.indexOf(" ") >-1) {
            document.getElementById('messageAdd').innerHTML ='Please write a word without spaces!';
            document.getElementById('messageAdd').style='color:#ffc107'; 
        } else {
            array[item] = wordLowerCase;
            document.getElementById('messageAdd').innerHTML ='Successfully added!';
            document.getElementById('messageAdd').style='color:#198754';
            ++item;
        }
    } else {
        document.getElementById('message').innerHTML = "You have already saved this word!";
        document.getElementById('message').style="color:#dc3545";
    }
    document.getElementById('txtAdd').value = '';
}

function checkWord() {
    let word = document.getElementById('txtCheck').value, wordLowerCase = word.toLowerCase();
    let alreadyExistsElement = array.some(element => element.includes(wordLowerCase));
    if (alreadyExistsElement == true) {
        document.getElementById('messageCheck').innerHTML = 'The word is saved in the dictionary!';
        document.getElementById('messageCheck').style='color:#198754';
    } else {
        document.getElementById('messageCheck').innerHTML = 'The word is not saved in the dictionary!';
        document.getElementById('messageCheck').style='color:#dc3545';
    }
    document.getElementById('txtCheck').value = '';
}