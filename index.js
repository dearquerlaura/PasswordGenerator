

// Declaration___________________________________________

const characters = [ "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
"a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
"0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
"~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/" ];

let passwordOneEl = document.getElementById("password-one")
let passwordTwoEl = document.getElementById("password-two")
let passwordLenghtEl = document.getElementById("password-lenght-el")



// Generate Password____________________________________


function getPassword() {

    passwordOneEl.textContent = '' ;
    passwordTwoEl.textContent = '' ;


    for (i=0; i<passwordLenghtEl.value; i++) {

        let randomCharacterOne = Math.floor ( Math.random() * characters.length )
        passwordOneEl.textContent += characters[randomCharacterOne]

        let randomCharacterTwo = Math.floor ( Math.random() * characters.length )
        passwordTwoEl.textContent += characters[randomCharacterTwo]
    }
    
}



// Copy Password___________________________________________


function copyPassword(id) {

    let copyPassword = document.getElementById(id);
    console.log(copyPassword.textContent)
    navigator.clipboard.writeText(copyPassword.textContent);

    let passwordEl = document.getElementById(id);
    passwordEl.textContent = 'Copied!' ;

}



