const hour = document.querySelector("#hour");
const minute = document.querySelector("#minut");
const second = document.querySelector("#second");
const btnAm = document.querySelector("#btn");
const btnPm = document.querySelector("#btn2");
const date = document.querySelector(".data");
const oy = document.querySelector(".oy");
const yil = document.querySelector(".yil");

// btnPm.addEventListener("click", (e) => {
//   const timeNow = new Date();
//       let hr2 = timeNow.getHours();

//     e.preventDefault();

//     if (hr2 <= 12) {
//       let hr2 = timeNow.getHours();
//       hour.textContent = hr2 < 10 ? "0" + hr2 : hr2;
//       return  hr2;
//     }
//   });

function clock() {
  btnAm;
  const timeNow = new Date();

  let hr = timeNow.getHours();

  // let soat = null;
  // btnAm.addEventListener("click", () => {
  //   soat = hr - 12;
  //   console.log(soat, "soat");
  // });

  let min = timeNow.getMinutes();
  let sd = timeNow.getSeconds();

  if (sd >= 0) {
    hour.classList.add("text-blue-500");
    second.classList.add("text-red-500");
    minute.classList.add("text-purple-500");
  }
  if (sd >= 10) {
    hour.classList.add("text-yellow-500");
    second.classList.add("text-yellow-500");
    minute.classList.add("text-yellow-500");
  }
  if (sd >= 20) {
    hour.classList.add("text-cyan-500");
    second.classList.add("text-cyan-500");
    minute.classList.add("text-cyan-500");
  }
  if (sd >= 30) {
    hour.classList.add("text-red-500");
    second.classList.add("text-red-500");
    minute.classList.add("text-red-500");
  }
  if (sd >= 40) {
    hour.classList.add("text-emerald-500");
    second.classList.add("text-emerald-500");
    minute.classList.add("text-emerald-500");
  }
  if (sd >= 50) {
    hour.classList.add("text-yellow-500");
    second.classList.add("text-yellow-500");
    minute.classList.add("text-yellow-500");
  }

  // btnAm.addEventListener("click", (e) => {
  //   let hr = timeNow.getHours();

  //   e.preventDefault();
  //   if (hr >= 12) {
  //     let hr = timeNow.getHours() - 12;
  //     hour.textContent = hr < 10 ? "0" + hr : hr;
  //   }
  // });

  hour.textContent = hr < 10 ? "0" + hr : hr;
  minute.textContent = min < 10 ? "0" + min : min;
  second.textContent = sd < 10 ? "0" + sd : sd;
}

function data() {
  const day = new Date();
  console.log(day);
  let kun = day.getDate();
  let mon = day.getMonth();
  date.textContent = kun;
  oy.textContent = mon;
  console.log(oy);
  let year = day.getFullYear();
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aut",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  oy.textContent = months[mon];
  yil.textContent = year;
}

data();

clock();

setInterval(clock, 1000);
