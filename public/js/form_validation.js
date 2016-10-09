function validateForm() {
    var value = document.forms["name_form"]["input_name"].value;
    if (value.length < 3) {
        document.getElementById("error").innerHTML = "Try Again but this time enter your name!";
        return false;
    }
}