const p1 = document.querySelector("#p1");
const p2 = document.querySelector("#p2");
const p1btn = document.querySelector("#p1btn");
const p2btn = document.querySelector("#p2btn");
const reset = document.querySelector("#reset");
const points = document.querySelector("#points")
let p1Score = 0
let p2Score = 0
let winningscore = 3;
let gameover = false;
p1btn.addEventListener("click", function (e) {
    if (!gameover) {
        p1Score += 1;
        if (p1Score === winningscore) {
            gameover = true;
            p1.classList.add('winner');
            p2.classList.add('Loser');
            p1btn.disabled = true;
            p2btn.disabled = true;
        }
        p1.textContent = p1Score;
    }
})
p2btn.addEventListener("click", function () {
    if (!gameover) {
        p2Score += 1;
        if (p2Score === winningscore) {
            gameover = true;
            p2.classList.add('winner');
            p1.classList.add('loser');
            p1btn.disabled = true;
            p2btn.disabled = true;
        }
        p2.textContent = p2Score;
    }
})
points.addEventListener("change", function () {
    winningscore = parseInt(this.value);
    resetbtn();
})
reset.addEventListener("click", resetbtn);
function resetbtn() {
    gameover = false;
    p1Score = 0;
    p2Score = 0;
    p1.textContent = 0;
    p2.textContent = 0;
    p1.classList.remove('winner', 'loser');
    p2.classList.remove('winner', 'loser');
    p1btn.disabled = false;
    p2btn.disabled = false;
};
