let arrayGame = ["", "", "", "", "", "", "", "", ""];
let placeEl = document.querySelector("body .place");
let turn = 0;
let runGame = true;
let itemsEl = document.querySelectorAll(".place div");
itemsEl.forEach((li, index) => {
  li.onclick = (e) => {
    if (runGame) {
      arrayGame[index] = turn % 2 == 0 ? "X" : "O";
      e.target.innerHTML = arrayGame[index];
      turn++;
      check(index);
    }
  };
});
function check(index) {
  let winningCondition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
  ];
  winningCondition.map((li) => {
    if (li.includes(index)) {
      if (li.every((item) => arrayGame[item] == arrayGame[index])) {
        li.map((i) => {
          itemsEl[i].style.backgroundColor = "green";
          itemsEl[i].style.color = "white";
        });
        runGame = false;
        alert(`${arrayGame[index]} Is Win`);
      }
    }
  });
}
let btnRestart = document.querySelector("body button");
btnRestart.onclick = () => {
  arrayGame = ["", "", "", "", "", "", "", "", ""];
  itemsEl.forEach((i) => {
    i.style.color = "black";
    i.style.backgroundColor = "white";
    i.innerHTML = "";
  });
  runGame = true;
  turn = 0;
};
