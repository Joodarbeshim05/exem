const inpName = document.querySelector(".inpName");
const inpAge = document.querySelector(".inpAge");
const inpImg = document.querySelector(".inpImg");
const inpModal = document.querySelector(".inpModal");
const addBtn = document.querySelector(".addBtn");
const heroForm = document.querySelector(".heroForm");
const heroResult = document.querySelector(".heroResult");
const modal = document.querySelector(".modal");
const body = document.querySelector("body");
const on = document.querySelector(".on");
const off = document.querySelector(".off");
modal.style.display = "none";
heroResult.style.display = "none";
body.style.background = "gray";

addBtn.addEventListener("click", () => {
  if (
    inpAge.value.trim() === "" ||
    inpImg.value.trim() === "" ||
    inpImg.value.trim() === ""
  ) {
    alert("с перва запони потом тебе будет модальная окно");
  } else {
    modal.style.display = "flex";
  }
});
on.addEventListener("click", () => {
  if (inpModal.value === "joodar") {
    heroForm.style.display = "none";
    on.style.display = "none";
    inpModal.style.display = "none";
    off.style.display = "none";
    heroResult.style.display = "flex";
    modal.append(heroResult);
    addData();
  } else {
    alert("не правильно");
  }
});
off.addEventListener("click", () => {
  modal.style.display = "none";
});

function addData() {
  let res = JSON.parse(localStorage.getItem("reg")) || [];

  let newData = {
    name: inpName.value,
    age: inpAge.value,
    img: inpImg.value,
  };
  let resData = [...res, newData];
  localStorage.setItem("reg", JSON.stringify(resData));
  inpAge.value = "";
  inpName.value = "";
  inpImg.value = "";
  view();
}
function view() {
  let res = JSON.parse(localStorage.getItem("reg")) || [];
  res.map((el) => {
    heroResult.innerHTML = `

        <img src="${el.img}" alt="img">
        <h1>${el.name}</h1>
        <h1>${el.age}</h1>

        `;
  });
}
view();
