function generateBoard() {
    const rows = 15;
    const columns = 15;
    const board = document.getElementById("board");

    for (let i = 0; i < rows; i++) {

        for (let j = 0; j < columns; j++) {

            let color = 'white';
            if ((i < 6 && j < 6) || (i === 7 && j > 0 && j < 7) || (i === 6 && j === 1)) color = 'red';
            else if ((i < 6 && j > 8) || (j === 7 && i > 0 && i < 7) || (i === 1 && j === 8)) color = 'green';
            else if ((i > 8 && j < 6) || (j === 7 && i > 7 && i < 14) || (i === 13 && j === 6)) color = 'blue';
            else if ((i > 8 && j > 8) || (i === 7 && j > 7 && j < 14) || (i === 8 && j === 13)) color = 'yellow';

            const square = document.createElement("div");
            square.style.backgroundColor = color;
            square.classList.add("square");

            if (i == 6 && j == 6) {
                square.style.background = "linear-gradient(to top right, red 50%, green 50%)";
            }
            else if (i == 8 && j == 6) {
                square.style.background = "linear-gradient(to bottom right, red 50%, blue 50%)";
            }
            else if (i == 6 && j == 8) {
                square.style.background = "linear-gradient(to bottom right, green 50%, yellow 50%)";
            }
            else if (i == 8 && j == 8) {
                square.style.background = "linear-gradient(to bottom left, yellow 50%, blue 50%)";
            }
            else if (i == 7 && j == 7) {
                square.textContent = "👑";
            }

            board.appendChild(square);
        }
    }
}

generateBoard();