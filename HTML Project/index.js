let likes = 0;
let disLikes = 0;
const likeDiv = document.getElementById("likes");
const disLikeDiv = document.getElementById("dis-likes");

document.getElementById("like-btn").addEventListener("click", likeFunc);
document.getElementById("dis-like-btn").addEventListener("click", disLikeFunc);
document.getElementById("add-table-btn").addEventListener("click", tableCreate);

const mouth = document.getElementsByClassName("mouth");
const happyBtn = document.getElementById("happay-btn");
const sadBtn = document.getElementById("sad-btn");

function likeFunc() {
  likes++;
  likeDiv.innerHTML = `אהבתי (${likes})`;
}
function disLikeFunc() {
  disLikes++;
  disLikeDiv.innerHTML = `לא אהבתי (${disLikes})`;
}

function tableCreate() {
  let rowsFromUser = document.getElementById("rows-input").value;
  let columnsFromUser = document.getElementById("columns-input").value;

  const body = document.body,
    tbl = document.createElement("table");
  tbl.style.width = "100px";
  tbl.style.border = "1px solid black";

  for (let i = 0; i < rowsFromUser; i++) {
    const tr = tbl.insertRow();
    for (let j = 0; j < columnsFromUser; j++) {
      if (i === rowsFromUser && j === columnsFromUser) {
        break;
      } else {
        const td = tr.insertCell();
        td.appendChild(document.createTextNode(`Cell I${i}/J${j}`));
        td.style.border = "1px solid black";
      }
    }
  }
  body.appendChild(tbl);
}
