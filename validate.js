const btn = document.querySelector(".input-prompt > button");

const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

btn.addEventListener("click", () => {
    const msg = document.querySelector(".error-msg");
    const icon = document.querySelector(".error-icon");
    if(!validateEmail(document.querySelector("#email").value)) {
        msg.innerText = "Please provide a valid email";
        msg.classList.remove("error-active");

        icon.classList.remove("error-active");
    } else {
        msg.classList.add("error-active");
        icon.classList.add("error-active");
    }
})