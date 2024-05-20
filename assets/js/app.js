const parentacc = document.querySelectorAll(".parent-acc");

parentacc.forEach(e => {
    e.addEventListener("click", function () {
        const acc = document.querySelector(".parent-acc.active");
        e.classList.toggle("active");
        acc && acc.classList.remove("active");
    })
});
let navicon = document.querySelector(".nav-icon");
let lgview = document.querySelector(".lg-view");
navicon.addEventListener("click", () => {
    lgview.classList.toggle("show");
});