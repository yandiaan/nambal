let toggle = document.querySelector(".navbtn-toggle");
toggle.addEventListener("click", function () {
  let listLink = document.querySelector("ul");
  if (listLink.classList.contains("none")) {
    listLink.classList.remove("none");
    toggle.innerHTML = "&#9747;";
  } else {
    listLink.classList.add("none");
    toggle.innerHTML = "&#9776;";
  }
});

let navbar = document.querySelector(".navbar");
let sticky = navbar.offsetTop;
window.addEventListener("scroll", function () {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
});
