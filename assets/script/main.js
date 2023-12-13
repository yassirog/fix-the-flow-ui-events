let interaction = document.querySelector('a:nth-of-type(12)');

interaction.addEventListener('click', jumpHandler);
interaction.addEventListener('animationend', jumpHandler);

function jumpHandler() {
  interaction.classList.toggle('jump');
}

//NR 1 click
let frontend = document.querySelector('a:nth-of-type(1)');
frontend.addEventListener('click', changeColor)

function changeColor() {
  frontend.classList.toggle('changeColor');
}

//NR 2 click
let design = document.querySelector('a:nth-of-type(2)');

design.addEventListener('click', function() {
  console.log("clicked");
  alert('Je hebt op Design geklikt!');
});

//NR 3 mouseLeave
let and = document.querySelector('a:nth-of-type(3)');
and.addEventListener('mouseleave', function() {
  console.log("left");
  and.style.border = 'none';
});

//NR 4 mouseEnter
let development = document.querySelector('a:nth-of-type(4)');
development.addEventListener('mouseenter', function() {
  development.style.border = '2px solid green';
});

//NR 5 mouseOver
let sprintvijf = document.querySelector('a:nth-of-type(5)');
sprintvijf.addEventListener('mouseover', function() {
  sprintvijf.textContent = 'Overheen';
});

//NR 6 doubleClick
let fix = document.querySelector('a:nth-of-type(6)');
fix.addEventListener('dblclick', function() {
  fix.style.fontWeight = 'bold';
});

//NR 7 focus & blur
let the = document.querySelector('a:nth-of-type(7)');
the.addEventListener('focus', function() {
  the.style.color = 'pink';
});

the.addEventListener("blur", (event) => {
  event.target.style.color = "";});

//NR 8 blur
let flow = document.querySelector('a:nth-of-type(8)');
flow.addEventListener("blur", (event) => {
  event.target.style.color = "blue";
});

//NR 9 wheel
let user = document.querySelector('a:nth-of-type(9)');
user.addEventListener("wheel", function() {
  user.style.color = 'red';
})

//NR 10 keypress
let interface = document.querySelector('a:nth-of-type(10)');
interface.addEventListener("keypress", function() {
  interface.innerHTML = "toetsie";
})








