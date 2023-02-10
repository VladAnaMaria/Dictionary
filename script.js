let item = 1, array = Array();
function addWord() {
    let word = document.getElementById('txt').value, wordLowerCase = word.toLowerCase();
    let alreadyExistsElement = array.some(element => element.includes(wordLowerCase));
    if (alreadyExistsElement == false) {
        if (wordLowerCase.indexOf(" ") >-1) {
            document.getElementById('message').innerHTML ="Please write a word without spaces!";
            document.getElementById('message').style="color:#ffc107"; 
        } else {
            array[item] = wordLowerCase;
            document.getElementById('message').innerHTML ="Successfully added!";
            document.getElementById('message').style="color:#198754";
            ++item;
        }
    } else {
        document.getElementById('message').innerHTML = "You have already saved this word!";
        document.getElementById('message').style="color:#dc3545";
    }
    document.getElementById('txt').value = "";
}
