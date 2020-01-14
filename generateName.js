var username;
document.getElementsByClassName("submit").addEventListener("click", genName);

function genName() {
    var fName = document.querySelector("[class='fName']").value;
    var sName = document.querySelector("[class='sName']").value;
    if (fName.length > 0 && sName.length > 0) {
        username = `${fName.charAt(0)}.${sName}`;
        console.log(username);
        document.querySelector("[class='lotto']").style = "display: inline-block; padding: 48px; margin-left: 34%";
        document.querySelector("[class='submit']").style ="display: block; max-width: 300px; margin: auto;";
        document.querySelector("[class='container']").style = "display: none;";
    } else if (fName.length <= 0 && sName.length > 0) {
        alert('Please enter a Forename.');
    } else if (fName.length > 0 && sName.length <= 0) {
        alert('Please enter a Surname.');
    } else {
        alert('Please add some values');
    }

}


async function menuPicker() {
    var option = await prompt("Enter an option : 1, 2 or 3 to exit", "Harry Potter");
    if (option.typeOf === 'string') {
        option = parseInt(option);
        if (option === null || option.typeOf != 'number') {
            await alert('Please enter a valid option!');
        }
    }
    switch(option) {
        case 1:
            await alert(`Your username is: ${username}`);
        break;
        case 2:
            var numbers = await lottoNum(6) //Number, is the number of random numbers you want to return
            await alert(`Your ${numbers.length} lotto numbers are: ${numbers} `);
        break;
        case 3:
            await alert('PROGRAM ENDED');
        break;

    }
}


function lottoNum(num) {
    var numbers;
    for (var i = 0; i < num; i++) {
        numbers[i] = Math.floor(Math.random() * 50)
    }
    return numbers;
}