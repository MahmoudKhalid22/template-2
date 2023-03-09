const preloader = document.querySelector(".preloader");
const btns = document.querySelectorAll(".btn");
const boxes = document.querySelectorAll(".box");

window.addEventListener("load", () => {
  preloader.classList.add("hide-preloader");
  activeAllButton();
});
btns[0].onclick = activeAllButton;


function activeAllButton(){
  removeActive();
  btns[0].classList.add('act');
  boxes.forEach(box =>{
    box.classList.add('active');
})
}

for (let i = 1; i < btns.length; i++) {
  btns[i].onclick = function () {
    removeActive();
    btns[i].classList.add("act");
    // console.log(btns[i].getAttribute("class"));
    for (let j = 0; j < boxes.length; j++) {
      if(btns[i].getAttribute('data-index') ===boxes[j].getAttribute('data-index')){
        boxes[j].classList.add('active')
      }
    }
  };
}

function removeActive() {
  btns.forEach((btn) => {
    btn.classList.remove("act");
  });
  boxes.forEach((box) => {
    box.classList.remove("active");
  });
}
