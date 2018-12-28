var link = document.querySelector(".feedback-b");
  
var popup = document.querySelector(".modal");
var close = popup.querySelector(".modal-close");
  
var form = popup.querySelector(".feedback-form");
var inputName = popup.querySelector(".popap-name");
var inputEmail = popup.querySelector(".popap-email");
var inputComments = popup.querySelector(".popap-coments");

var isStorageSupport = true;
var storage = "";

try {
    storage = localStorage.getItem("inputName");
} catch (err) {
    isStorageSupport = false;
}
  
link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
    
    if (storage) {
        inputName.value = storage;
        inputEmail.focus();
    } else {
        inputName.focus();
    }
});
  
close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
});
  
form.addEventListener("submit", function (evt) {
    if (!inputName.value || !inputEmail.value || !inputComments.value) {
        evt.preventDefault();
        popup.classList.remove("modal-error");
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add("modal-error");
    } else {
        if (isStorageSupport) {
            localStorage.setItem("inputName", inputName.value);
        }
    }
});
  
window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (popup.classList.contains("modal-show")) {
            popup.classList.remove("modal-show");
            popup.classList.remove("modal-error");
        }
    }
});