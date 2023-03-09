<<<<<<< HEAD
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
=======
const menu = [
  {
    id: 1,
    title: "Awesome Image",
    project: "app",
    img: "../images/shuffle-01.jpg",
    desc: "Photography",
  },
  {
    id: 2,
    title: "Awesome Image",
    project: "app",
    img: "../images/shuffle-02.jpg",
    desc: "Photography",
  },
  {
    id: 3,
    title: "Awesome Image",
    project: "app",
    img: "../images/shuffle-03.jpg",
    desc: "Photography",
  },
  {
    id: 4,
    title: "Awesome Image",
    project: "photo",
    img: "../images/shuffle-04.jpg",
    desc: "Photography",
  },
  {
    id: 5,
    title: "Awesome Image",
    project: "photo",
    img: "../images/shuffle-05.jpg",
    desc: "Photography",
  },
  {
    id: 6,
    title: "Awesome Image",
    project: "web",
    img: "../images/shuffle-06.jpg",
    desc: "Photography",
  },
  {
    id: 7,
    title: "Awesome Image",
    project: "web",
    img: "../images/shuffle-07.jpg",
    desc: "Photography",
  },
  {
    id: 8,
    title: "Awesome Image",
    project: "print",
    img: "../images/shuffle-08.jpg",
    desc: "Photography",
  },
];

const preloader = document.querySelector(".preloader");
const boxes = document.querySelectorAll(".filter");
const sectionCenter = document.querySelector(".section-center");
//preloader
// window.addEventListener("load", () => {
//   preloader.classList.add("hide-preloader");
// });

//filter projects (shuffle function)

window.addEventListener("DOMContentLoaded", () => {
  displayMenuItem(menu);
});
// boxes.forEach((box) => {
//   box.addEventListener("click", (e) => {
//     // console.log(e.target.classList);
//     const word = e.currentTarget.dataset.id;
//     // console.log(typeof word[1] );
//     if (word[1] === "l") {
//       e.target.classList.add("activeButton");
//     } else if (word[1] === "p") {
//       e.target.classList.add("activeButton");
//     } else if (word[1] === "h") {
//       e.target.classList.add("activeButton");
//     } else if (word[1] === "e") {
//       e.target.classList.add("activeButton");
//     } else if (word[1] === "r") {
//       e.target.classList.add("activeButton");
//     }
//   });
// });

boxes.forEach((box) => {
  box.addEventListener("click", (e) => {
    const project = e.currentTarget.dataset.id;
    // console.log(project);
    const menuProjects = menu.filter((item) => {
      item.project;
      // console.log(item.project);
      if (item.project === project) {
        console.log(project[1]);
        return item.img;
      }
      if (item.project === "all") {
        // box.classList.add("activeButton");

        return displayMenuItem(menu);
      }
    });
    displayMenuItem(menuProjects);
  });
});

const all = document.querySelector(".all");
all.addEventListener("click", () => {
  menu.forEach(displayMenuItem(menu));
});

function displayMenuItem(menuItems) {
  let displayMenu = menuItems.map((item) => {
    return `<div class="box">
          <img src=${item.img} />
          <div class="box-content">
            <h2>${item.title}</h2>
            <p>${item.photgraphy}</p>
          </div>
        </div>`;
  });
  displayMenu = displayMenu.join("");
  sectionCenter.innerHTML = displayMenu;
>>>>>>> refs/remotes/origin/main
}
