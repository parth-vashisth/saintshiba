const parentacc = document.querySelectorAll(".parent-acc");

parentacc.forEach(e => {
    e.addEventListener("click", function () {
        const acc = document.querySelector(".parent-acc.active");
        e.classList.toggle("active");
        acc && acc.classList.remove("active");
    })
});