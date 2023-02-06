let toggle = document.querySelector(".toggle");
let menu = document.querySelector(".menu");
let title = document.querySelector(".title");
let go = document.querySelector("#go")
let change0 = document.querySelector("#change0");
let change1 = document.querySelector("#change1");
let change2 = document.querySelector("#change2");
let change3 = document.querySelector("#change3");
let change4 = document.querySelector("#change4");
let change5 = document.querySelector("#change5");
let change6 = document.querySelector("#change6");
let change7 = document.querySelector("#change7");
let change8 = document.querySelector("#change8");

toggle.onclick = function () {
    toggle.classList.toggle('active');
    menu.classList.toggle('open');
    title.classList.toggle('close');
  };

change0.onclick = function () {
  bg.style.backgroundImage = "url('imges/m5.jpg')";
  go.href = 'sedans.html';
};
change1.onclick = function () {
  bg.style.backgroundImage = "url('imges/super.jpg')";
  go.href = 'super.html'
};
change2.onclick = function () {
  bg.style.backgroundImage = "url('imges/Hyundai.jpg')";
};
change3.onclick = function () {
  bg.style.backgroundImage = "url('imges/m4.jpg')";
};
change4.onclick = function () {
  bg.style.backgroundImage = "url('imges/divo.jpg')";
};
change5.onclick = function () {
  bg.style.backgroundImage = "url('imges/s600.jpeg')";
};
change6.onclick = function () {
  bg.style.backgroundImage = "url('imges/gt.jpg')";
};
change7.onclick = function () {
  bg.style.backgroundImage = "url('imges/muscle.jpg')";
};
change8.onclick = function () {
  bg.style.backgroundImage = "url('imges/e.jpeg')";
};
