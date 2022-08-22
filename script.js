const toggle = document.querySelector(".toggle");
const navbar = document.querySelector(".navbar");
const header = document.querySelector(".header");
const accHeader = document.querySelectorAll(".accordion-header");

toggle.onclick = () => {
    navbar.classList.toggle("active")
    toggle.firstElementChild.classList.toggle("fa-times")
}
window.onscroll = () => {
    navbar.classList.remove("active");
    toggle.firstElementChild.classList.remove("fa-times");

    if (window.scrollY >= 300) {
        header.style.backgroundColor = '#6c5ce7';
        header.style.boxShadow = '0 .2rem .5rem rgba(0,0,0,.4)';
    } else {
        header.style.backgroundColor = '';
        header.style.boxShadow = '';
    }

}
accHeader.forEach(header => {
    header.querySelector("span").textContent="+";
    header.onclick = () => {
        document.querySelectorAll(".accordion-body").forEach(body => {
            body.style.display="none";
        })
        header.querySelector("span").textContent="-";
        header.parentElement.querySelector(".accordion-body").style.display="block";
    }
})