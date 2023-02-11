// Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
// Note:

// A Sudoku board (partially filled) could be valid but is not necessarily solvable.
// Only the filled cells need to be validated according to the mentioned rules.

let example = [["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
//output should be true

let example2 = [["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
//output should be false

const isValidSudoku = (board) =>{
    let column = {}
    let grid = {1:[],2:[],3:[],4:[],5:[],6:[],7:[],8:[],9:[]}
    for (let i=0;i<board.length;i++){
        let hori = {}
        for (let j=0;j<board.length;j++){
            //check for horizontal duplicate
            if(!hori[board[i][j]]){
                hori[board[i][j]] = board[i][j]
            }
            else if(hori[board[i][j]] !== "."){
                return false
            }
            //these create the columns
            if(!column[j]){
                column[j]=[board[i][j]]
            }
            else{
                column[j].push(board[i][j])
            }
            //creates grids
            if (i<3 && j<3){
                grid[1].push(board[i][j])
            }
            else if (i<3 && j<6){
                grid[2].push(board[i][j])
            }
            else if (i<3 && j<9){
                grid[3].push(board[i][j])
            }
            else if (i<6 && j<3){
                grid[4].push(board[i][j])
            }
            else if (i<6 && j<6){
                grid[5].push(board[i][j])
            }
            else if (i<6 && j<9){
                grid[6].push(board[i][j])
            }
            else if (i<9 && j<3){
                grid[7].push(board[i][j])
            }
            else if (i<9 && j<6){
                grid[8].push(board[i][j])
            }
            else if (i<9 && j<9){
                grid[9].push(board[i][j])
            }
        }
    }
    //checking duplicates


    return true
}

console.log(isValidSudoku(example))