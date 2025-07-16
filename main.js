    const cells = document.querySelectorAll('.cell');
    const resetButton = document.getElementById('reset');
    let currentPlayer = 'X';      
    let gameActive = true;    
    const winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];            
    function handleCellClick(event) {
        const cell = event.target;
        const index = cell.getAttribute('data-index');

        if (cell.textContent || !gameActive) return;

        cell.textContent = currentPlayer;
        checkWin();
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }     
    function checkWin() {
        for (let condition of winningConditions) {
            const [a, b, c] = condition;
            if (cells[a].textContent && 
                cells[a].textContent === cells[b].textContent && 
                cells[a].textContent === cells[c].textContent) {
                alert(`${cells[a].textContent} wins!`);
                gameActive = false;
                return;
            }
        }
        if ([...cells].every(cell => cell.textContent)) {
            alert("It's a draw!");
            gameActive = false;
        }
    } 
    function resetGame() {
        cells.forEach(cell => cell.textContent = '');
        currentPlayer = 'X';
        gameActive = true;
    }
    cells.forEach(cell => cell.addEventListener('click', handleCellClick)); 
    resetButton.addEventListener('click', resetGame);     