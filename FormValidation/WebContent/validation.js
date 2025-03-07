function validate() {
    var name = document.getElementById('name').value;
    var pwd = document.getElementById('pwd').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var country = document.getElementById('country').value;

    var namecheck = /^[A-Za-z\s]{6,20}$/;
    var pwdcheck = /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]{10,30}$/;
    var phonecheck = /^[789][0-9]{9}$/;
    var emailcheck = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    if (!namecheck.test(name)) {
        alert("UserName must be 6-20 characters.");
        return false;
    }

    if (!pwdcheck.test(pwd)) {
        alert("Password must have 1 uppercase, 1 special symbol, and 1 digit.");
        return false;
    }

    if (!phonecheck.test(phone)) {
        alert("Phone must start with 7, 8, or 9 and have 10 digits.");
        return false;
    }

    if (!emailcheck.test(email)) {
        alert("Please insert a valid email.");
        return false;
    }

    if (country === "") {
        alert("Please select a country.");
        return false;
    }

    return true;
}
/**
 * 
 */