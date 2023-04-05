var div = document.getElementById("mainFilter");
let menu = document.getElementById("subMenu");
let suz = document.getElementById("soz");
let su = document.getElementById("so");
let s = document.getElementById("s");
let f = document.getElementById("f");
let sss = document.getElementById("sss");
let ssss = document.getElementById("ssss");
let first = document.getElementById("first");
let sec = document.getElementById("second");
let third = document.getElementById("third");
let four = document.getElementById("four");
let five = document.getElementById("five");

var display = 0;
function hideShow() {
  if (display == 1) {
    div.style.display = "block";
    menu.style.display = "block";
    display = 0;
    div.classList.add("d-lg-block");
    sss.classList.add("d-lg-block");
    ssss.classList.add("d-lg-block");
    document.getElementById("FilterTitle").innerHTML = "HIDE FILTERS";
    suz.classList.remove("col-lg-4");
    suz.classList.add("col-lg-3");
    su.classList.remove("col-lg-4");
    su.classList.add("col-lg-3");
    s.classList.remove("col-lg-4");
    s.classList.add("col-lg-3");
    first.classList.remove("col-lg-4");
    first.classList.add("col-lg-3");
    sec.classList.remove("col-lg-4");
    sec.classList.add("col-lg-3");
    third.classList.remove("col-lg-4");
    third.classList.add("col-lg-3");
    four.classList.remove("col-lg-6");
    four.classList.add("col-lg-4");
    five.classList.remove("col-lg-6");
    five.classList.add("col-lg-4");
  } else {
    div.style.display = "none";
    menu.style.display = "none";
    display = 1;
    div.classList.remove("d-lg-block");
    sss.classList.remove("d-lg-block");
    ssss.classList.remove("d-lg-block");
    document.getElementById("FilterTitle").innerHTML = "SHOW FILTERS";
    suz.classList.remove("col-lg-3");
    suz.classList.add("col-lg-4");
    su.classList.remove("col-lg-3");
    su.classList.add("col-lg-4");
    s.classList.remove("col-lg-3");
    s.classList.add("col-lg-4");
    first.classList.remove("col-lg-3");
    first.classList.add("col-lg-4");
    sec.classList.remove("col-lg-3");
    sec.classList.add("col-lg-4");
    third.classList.remove("col-lg-3");
    third.classList.add("col-lg-4");
    four.classList.remove("col-lg-4");
    four.classList.add("col-lg-6");
    five.classList.remove("col-lg-4");
    five.classList.add("col-lg-6");
  }
}
var cards = document.querySelectorAll(".product-box");
[...cards].forEach((card) => {
  card.addEventListener("mouseover", function () {
    card.classList.add("is-hover");
  });
  card.addEventListener("mouseleave", function () {
    card.classList.remove("is-hover");
  });
});
