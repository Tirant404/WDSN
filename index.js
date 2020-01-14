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


