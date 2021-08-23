const LoginForm = document.querySelector("#login-form");
const LoginInput = document.querySelector("#login-form input");
const DisplayField = document.querySelector("#displayField");
const UserName = "username";
const HiddenClass = "hidden";

function HandleLoginSubmit(event) {
    event.preventDefault();
    localStorage.setItem(UserName, LoginInput.value);
    LoginForm.classList.add(HiddenClass);
    DisplayField.innerText = LoginInput.value;
    DisplayField.classList.remove(HiddenClass);
}

const NameValue = localStorage.getItem(UserName)

if(NameValue === null) {
    LoginForm.classList.remove(HiddenClass);
    LoginForm.addEventListener("submit", HandleLoginSubmit);
}
else {
    DisplayField.innerText = NameValue;
    DisplayField.classList.remove(HiddenClass);
}

