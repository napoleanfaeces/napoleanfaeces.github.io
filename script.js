function validate() {
    var isValid = 0;
    if (document.getElementById("fn").value == '' || document.getElementById("ln").value == '' || document.getElementById("email").value == '' || document.getElementById("psw").value == '' || document.getElementById("schorg").value == '') {
        alert("Invalid. Please make sure all of these details are filled up!");
    } else {
        isValid = 1;
    }
    if (isValid === 1) {
        incrementButton();
    }
}

function incrementButton() {
    var element = document.getElementById('incrementText');
    var value = element.innerHTML;

    ++value;

    console.log(value);
    document.getElementById('incrementText').innerHTML = value;

    document.getElementById("fn").value = '';
    document.getElementById("ln").value = '';
    document.getElementById("email").value = '';
    document.getElementById("psw").value = '';
    document.getElementById("schorg").value = '';
}