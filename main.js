const btn = document.querySelector(".btn");
const body = document.querySelector("body");
const headerPhone = document.querySelector(".header-phone");
const headerEmail = document.querySelector(".header-email");
const footer = document.querySelector(".page-footer");
let i = 1;
btn.addEventListener("click", () =>{
    body.classList.toggle("light");
    headerPhone.classList.toggle("light-header");
    headerEmail.classList.toggle("light-header");
    footer.classList.toggle("light-footer");
    if (i%2==0) {
        btn.textContent ="Светлая тема";
        i++;
    } else {
    btn.textContent ="Темная тема";
    i++;
    }
})