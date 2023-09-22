let menuA = document.querySelectorAll("#nav a");
menuA.forEach((a) => {
    a.addEventListener(
        "click",
        function () {
            document.querySelector("#nav-toggle").checked = false
        }, false)
})
document.querySelector("header .shadow").onclick = function () {
    document.querySelector("#nav-toggle").checked = false
}

const body = document.querySelector("body");
const shadowForm = document.querySelector(".shadow_form");
const showForm = document.querySelectorAll(".show_form");
showForm.forEach((BSF) => {
    BSF.addEventListener(
        "click",
        function () {
            shadowForm.style.display = "flex";
            body.classList.add("overf_h")
        }, false
    )
})
const closeM = document.querySelectorAll(".shadow_form [class^='close']");
closeM.forEach((cl) => {
    cl.addEventListener(
        'click',
        function () {
            shadowForm.style.display = "none";
            body.classList.remove("overf_h")
        }, false)
})

function buttonDeleteDi(el) {
    let name = el.name.value;
    let num = el.num.value;
    let checkData = el.checkData;
    let btn = el.querySelector("[type='submit']");

    if (name.length != 0 && num.length != 0 && checkData.checked)
        btn.removeAttribute("disabled");
    else
        btn.setAttribute("disabled", "true")
}

function submitForm() {
    shadowForm.querySelector(".block_form").style.display = "none";
    shadowForm.querySelector("#post_form").style.display = "block";
    shadowForm.style.display = "flex";
    return false
}


const slides = document.querySelectorAll(".coment");

let current = 0;
let prev;
let next;
document.addEventListener('DOMContentLoaded',()=>{
    gotoNum(current);
});

const gotoPrev = () => current > 0 ? gotoNum(current - 1) : gotoNum(slides.length - 1);

const gotoNext = () => current < slides.length - 1 ? gotoNum(current + 1) : gotoNum(0);

const gotoNum = number => {
    current = number;
    prev = current - 1;
    next = current + 1;

    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
        slides[i].classList.remove("prev");
        slides[i].classList.remove("next");
    }

    if (next == slides.length) {
        next = 0;
    }

    if (prev == -1) {
        prev = slides.length - 1;
    }
    console.log("p" + prev + ", n" + next);

    slides[current].classList.add("active");
    slides[prev].classList.add("prev");
    slides[next].classList.add("next");
}
