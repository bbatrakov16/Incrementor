// INCREMENTING VARIABLES & RANDOM VALUES

// Buttons and numbers
let counter = 0; // counter was created (the inital value)

var displayEl = document.getElementById("display"); // displayEl was created

// Btn "minus 50"
var minus50Btn = document.getElementById("minus50"); // minus50Btn was created
minus50Btn.addEventListener("click", minus50);

function minus50() {
  counter -= 50;
  displayEl.innerHTML = counter;
}

// Btn "minus 10"
var minus10Btn = document.getElementById("minus10"); // minus10Btn was created
minus10Btn.addEventListener("click", sub10);

function sub10() {
  counter -= 10;
  displayEl.innerHTML = counter;
}

// Btn "minus 1"
var minus1Btn = document.getElementById("minus1"); // minus1Btn was created
minus1Btn.addEventListener("click", minus1);

function minus1() {
  counter -= 1;
  displayEl.innerHTML = counter;
}

// Btn "plus 1"
var plus1Btn = document.getElementById("plus1"); // plus1Btn was created
plus1Btn.addEventListener("click", add1);

function add1() {
  counter++;
  displayEl.innerHTML = counter;
}

// Btn "plus 10"
var plus10Btn = document.getElementById("plus10"); // plus10Btn was created
plus10Btn.addEventListener("click", plus10);

function plus10() {
  counter += 10;
  displayEl.innerHTML = counter;
}

// Btn "plus 50"
var plus50Btn = document.getElementById("plus50"); // plus50Btn was created
plus50Btn.addEventListener("click", plus50);

function plus50() {
  counter += 50;
  displayEl.innerHTML = counter;
}

var story = "Once upon a time, "; // story was created

var stringInEl = document.getElementById("strIn"); // stringInEl was created
var stringOutEl = document.getElementById("strOut"); // stringOutEl was created

stringInEl.addEventListener("change", updateStory);

function updateStory() {
  var newWord = stringInEl.value; // this lets return to us what we will write in the input

  stringInEl.value = ""; // clears the input

  story += newWord + " ";

  stringOutEl.innerHTML = story;
}

// 4. Math.random() is used to bring RNG (random number generator) to your applications.

// Random 0 - 1
var rand1Btn = document.getElementById("rand1"); // rand1Btn was created
var rand1OutEl = document.getElementById("rand1-out"); // rand10OutEl was created
rand1Btn.addEventListener("click", showRand1);

function showRand1() {
  var rand1 = Math.random();
  rand1 = rand1.toFixed(3);
  rand1OutEl.innerHTML = rand1;
}

// Random 0 - 100
var rand2Btn = document.getElementById("rand2"); // rand2Btn was created
var rand2OutEl = document.getElementById("rand2-out"); // rand2OutEl was created
rand2Btn.addEventListener("click", showRandom2);

function showRandom2() {
  var rand2 = Math.random() * 100;
  rand2 = rand2.toFixed(3);
  rand2OutEl.innerHTML = rand2;
}

// Random -5 - 5
var rand3Btn = document.getElementById("rand3"); // rand3Btn was created
var rand3OutEl = document.getElementById("rand3-out"); // rand3OutEl was created
rand3Btn.addEventListener("click", showRandom3);

function showRandom3() {
  var rand3 = Math.random() * 10;
  rand3 = rand3 - 5;
  rand3 = rand3.toFixed(3);
  rand3OutEl.innerHTML = rand3;
}

// Random with choosing limits
var rand4Btn = document.getElementById("rand4"); // rand4Btn was created
var rand4OutEl = document.getElementById("rand4-out"); // rand4OutEl was created
rand4Btn.addEventListener("click", showRandom4);

function showRandom4() {
  let lim1 = +document.getElementById("rand-in1").value;
  let lim2 = +document.getElementById("rand-in2").value;

  var rand4 = Math.random() * (lim2 - lim1);
  rand4 = rand4 + lim1;
  rand4 = rand4.toFixed(3);
  rand4OutEl.innerHTML = rand4;
}

// Random size
var size1 = document.getElementById("the-h1"); // size1 was created
var size2 = document.getElementById("the-h2-1"); // size2 was created
var size3 = document.getElementById("display"); // size3 was created
var size4 = document.getElementById("minus50"); // size4 was created
var size5 = document.getElementById("minus10"); // size5 was created
var size6 = document.getElementById("minus1"); // size6 was created
var size7 = document.getElementById("plus1"); // size7 was created
var size8 = document.getElementById("plus10"); // size8 was created
var size9 = document.getElementById("plus50"); // size9 was created
var size10 = document.getElementById("the-h2-2"); // size10 was created
var size11 = document.getElementById("the-p-1"); // size11 was created
var size12 = document.getElementById("strIn"); // size12 was created
var size13 = document.getElementById("strOut"); // size13 was created
var size14 = document.getElementById("the-h2-3"); // size14 was created
var size15 = document.getElementById("the-p-2"); // size15 was created
var size16 = document.getElementById("rand1"); // size16 was created
var size17 = document.getElementById("rand1-out"); // size17 was created
var size18 = document.getElementById("rand2"); // size18 was created
var size19 = document.getElementById("rand2-out"); // size19 was created
var size20 = document.getElementById("rand3"); // size20 was created
var size21 = document.getElementById("rand3-out"); // size21 was created
var size22 = document.getElementById("rand4"); // size22 was created
var size23 = document.getElementById("rand-in1"); // size23 was created
var size24 = document.getElementById("rand-in2"); // size24 was created
var size25 = document.getElementById("rand4"); // size25 was created
var size26 = document.getElementById("rand4-out"); // size26 was created

var btnSize = document.getElementById("random-size"); // btnRandomSize was created
var btnRandomRgb = document.getElementById("random-rgb"); // btnRandomRgb was created
var btnReset = document.getElementById("reset"); // btnReset was created

btnSize.addEventListener("click", showNewSize1);

function showNewSize1() {
  var x = Math.random() * 30;
  x = x - 5;
  x = x.toFixed(2);
  size1.style.fontSize = x + "px";
}

btnSize.addEventListener("click", showNewSize2);

function showNewSize2() {
  var x = Math.random() * 30;
  x = x - 5;
  x = x.toFixed(2);
  size2.style.fontSize = x + "px";
}

btnSize.addEventListener("click", showNewSize3);

function showNewSize3() {
  var x = Math.random() * 30;
  x = x - 5;
  x = x.toFixed(2);
  size3.style.fontSize = x + "px";
}

btnSize.addEventListener("click", showNewSize4);

function showNewSize4() {
  var x = Math.random() * 30;
  x = x - 5;
  x = x.toFixed(2);
  size4.style.fontSize = x + "px";
}

btnSize.addEventListener("click", showNewSize5);

function showNewSize5() {
  var x = Math.random() * 30;
  x = x - 5;
  x = x.toFixed(2);
  size5.style.fontSize = x + "px";
}

btnSize.addEventListener("click", showNewSize6);

function showNewSize6() {
  var x = Math.random() * 30;
  x = x - 5;
  x = x.toFixed(2);
  size6.style.fontSize = x + "px";
}

btnSize.addEventListener("click", showNewSize7);

function showNewSize7() {
  var x = Math.random() * 30;
  x = x - 5;
  x = x.toFixed(2);
  size7.style.fontSize = x + "px";
}

btnSize.addEventListener("click", showNewSize8);

function showNewSize8() {
  var x = Math.random() * 30;
  x = x - 5;
  x = x.toFixed(2);
  size8.style.fontSize = x + "px";
}

btnSize.addEventListener("click", showNewSize9);

function showNewSize9() {
  var x = Math.random() * 30;
  x = x - 5;
  x = x.toFixed(2);
  size9.style.fontSize = x + "px";
}

btnSize.addEventListener("click", showNewSize10);

function showNewSize10() {
  var x = Math.random() * 30;
  x = x - 5;
  x = x.toFixed(2);
  size10.style.fontSize = x + "px";
}

btnSize.addEventListener("click", showNewSize11);

function showNewSize11() {
  var x = Math.random() * 30;
  x = x - 5;
  x = x.toFixed(2);
  size11.style.fontSize = x + "px";
}

btnSize.addEventListener("click", showNewSize12);

function showNewSize12() {
  var x = Math.random() * 30;
  x = x - 5;
  x = x.toFixed(2);
  size12.style.fontSize = x + "px";
}

btnSize.addEventListener("click", showNewSize13);

function showNewSize13() {
  var x = Math.random() * 30;
  x = x - 5;
  x = x.toFixed(2);
  size13.style.fontSize = x + "px";
}

btnSize.addEventListener("click", showNewSize14);

function showNewSize14() {
  var x = Math.random() * 30;
  x = x - 5;
  x = x.toFixed(2);
  size14.style.fontSize = x + "px";
}

btnSize.addEventListener("click", showNewSize15);

function showNewSize15() {
  var x = Math.random() * 30;
  x = x - 5;
  x = x.toFixed(2);
  size15.style.fontSize = x + "px";
}

btnSize.addEventListener("click", showNewSize16);

function showNewSize16() {
  var x = Math.random() * 30;
  x = x - 5;
  x = x.toFixed(2);
  size16.style.fontSize = x + "px";
}

btnSize.addEventListener("click", showNewSize17);

function showNewSize17() {
  var x = Math.random() * 30;
  x = x - 5;
  x = x.toFixed(2);
  size17.style.fontSize = x + "px";
}

btnSize.addEventListener("click", showNewSize18);

function showNewSize18() {
  var x = Math.random() * 30;
  x = x - 5;
  x = x.toFixed(2);
  size18.style.fontSize = x + "px";
}

btnSize.addEventListener("click", showNewSize19);

function showNewSize19() {
  var x = Math.random() * 30;
  x = x - 5;
  x = x.toFixed(2);
  size19.style.fontSize = x + "px";
}

btnSize.addEventListener("click", showNewSize20);

function showNewSize20() {
  var x = Math.random() * 30;
  x = x - 5;
  x = x.toFixed(2);
  size20.style.fontSize = x + "px";
}

btnSize.addEventListener("click", showNewSize21);

function showNewSize21() {
  var x = Math.random() * 30;
  x = x - 5;
  x = x.toFixed(2);
  size21.style.fontSize = x + "px";
}

btnSize.addEventListener("click", showNewSize22);

function showNewSize22() {
  var x = Math.random() * 30;
  x = x - 5;
  x = x.toFixed(2);
  size22.style.fontSize = x + "px";
}

btnSize.addEventListener("click", showNewSize23);

function showNewSize23() {
  var x = Math.random() * 30;
  x = x - 5;
  x = x.toFixed(2);
  size23.style.fontSize = x + "px";
}

btnSize.addEventListener("click", showNewSize24);

function showNewSize24() {
  var x = Math.random() * 30;
  x = x - 5;
  x = x.toFixed(2);
  size24.style.fontSize = x + "px";
}

btnSize.addEventListener("click", showNewSize25);

function showNewSize25() {
  var x = Math.random() * 30;
  x = x - 5;
  x = x.toFixed(2);
  size25.style.fontSize = x + "px";
}

btnSize.addEventListener("click", showNewSize26);

function showNewSize26() {
  var x = Math.random() * 30;
  x = x - 5;
  x = x.toFixed(2);
  size26.style.fontSize = x + "px";
}

btnSize.addEventListener("click", showNewSizeBtnSize);

function showNewSizeBtnSize() {
  var x = Math.random() * 30;
  x = x - 5;
  x = x.toFixed(2);
  btnSize.style.fontSize = x + "px";
}

btnSize.addEventListener("click", showNewSizeBtnRgb);

function showNewSizeBtnRgb() {
  var x = Math.random() * 30;
  x = x - 5;
  x = x.toFixed(2);
  btnRandomRgb.style.fontSize = x + "px";
}

btnSize.addEventListener("click", showNewSizeBtnReset);

function showNewSizeBtnReset() {
  var x = Math.random() * 30;
  x = x - 5;
  x = x.toFixed(2);
  btnReset.style.fontSize = x + "px";
}

// Random rgb Color
var randColorBtn = document.getElementById("random-rgb");
var randColorOut = document.getElementById("the-HTML");
randColorBtn.addEventListener("click", showNewBackground);

function showNewBackground() {
  let r = Math.random() * 255;
  r = r.toFixed(3);

  let g = Math.random() * 255;
  g = g.toFixed(3);

  let b = Math.random() * 255;
  b = b.toFixed(3);

  randColorOut.style.background = `rgb(${r}, ${g}, ${b})`;
}

// Reset

btnReset.addEventListener("click", showCleanBtnReset);

function showCleanBtnReset() {
  location.reload();
}
