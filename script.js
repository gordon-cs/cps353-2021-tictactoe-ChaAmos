// HTML
const status = document.querySelector('.status');
const restart = document.querySelector('.RS');
const gridSquares = document.querySelectorAll('.grid-square');


//variables
let gameLive = true;
let xCurr = true;
const xMarker = '×';
const oMarker = '⚬';

let win = null;



//functions

/*
 * If there is a winner, modify html .status 
 * Else, will update the current player
 */
const currStatus = () => {

  if(xCurr) {
    status.innerHTML = (`player: ${oMarker}`);
  } else {
    status.innerHTML = (`player: ${xMarker}`);
  }

  if (win!=null) {
    gameLive = false;
    status.innerHTML = `<span>${win}</span> has won!`;
  }
}

/*
 * Check win conditions & which marker is next
 */
const gameStatus = () => {
  //column check
  for (let col = 0; col < 3; col++) {
    if (gridSquares[col].classList[2] && 
      gridSquares[col].classList[2] === gridSquares[col+3].classList[2] &&
      gridSquares[col+6].classList[2] === gridSquares[col+3].classList[2]) {

        gridSquares[col].classList.add('win');
        gridSquares[col+3].classList.add('win');
        gridSquares[col+6].classList.add('win');
        win = gridSquares[col].classList[2];
      };                            
  };

  //row check
  for (let row = 0; row < 7; row+=3) {
    if (gridSquares[row].classList[2] &&
      gridSquares[row].classList[2] === gridSquares[row+1].classList[2] &&
      gridSquares[row+1].classList[2] === gridSquares[row+2].classList[2]) {

        gridSquares[row].classList.add('win');
        gridSquares[row+1].classList.add('win');
        gridSquares[row+2].classList.add('win');
        win = gridSquares[row].classList[2];
      };
  };

  //diagonal check
  if (gridSquares[0].classList[2] && 
    gridSquares[0].classList[2] === gridSquares[4].classList[2] && 
    gridSquares[4].classList[2] === gridSquares[8].classList[2]) {

      gridSquares[0].classList.add('win');
      gridSquares[4].classList.add('win');
      gridSquares[8].classList.add('win');
      win = gridSquares[0].classList[2];
    };

  if (gridSquares[2].classList[2] && 
    gridSquares[2].classList[2] === gridSquares[4].classList[2] && 
    gridSquares[4].classList[2] === gridSquares[6].classList[2]) {

      gridSquares[2].classList.add('win');
      gridSquares[4].classList.add('win');
      gridSquares[6].classList.add('win');
      win = gridSquares[2].classList[2];
    };
  console.log('winner:',win);

  if(xCurr) {
    status.innerHTML = (`player: ${oMarker}`);
  } else {
    status.innerHTML = (`player: ${xMarker}`);
  }
  currStatus();
};

/* 
 * if reset button has been selected, board will be wiped
 */
const rsGame = (e) => {
  xCurr = true;
  status.innerHTML = (`player: ${xMarker}`);
  win = null;
  for (sq of gridSquares) {
    sq.classList.remove('x');
    sq.classList.remove('o');
    sq.classList.remove('win');
  }
};

/*
 * each click of a square will produce a mark based on player
 */
const markSquare = (e) => {
  cl = e.target.classList;
  sqNum = cl[1];

  //if square is occupied
  if(cl[2]){
    console.log("taken",cl[2]);
    return;
  }

  //marks the correct marker
  if(xCurr){
    cl.add('x');
  } else {
    cl.add('o');
  }
  gameStatus();


  //swaps back
  xCurr = !xCurr;
};


 

//listeners
restart.addEventListener('click',rsGame);

for(const sq of gridSquares) {
  sq.addEventListener('click',markSquare)
};


/*                                                                                                                                      
                                                
                    ██                          
                  ████  ██████████████          
                      ██▒▒▒▒▒▒▒▒▒▒▒▒▒▒██        
                    ▓▓▓▓▒▒▒▒░░░░░░▒▒▒▒▒▒██      
                  ████▒▒▒▒░░░░░░░░░░░░░░░░██    
                ▓▓▒▒▒▒██▒▒░░░░░░██░░░░▓▓░░██    
                ██░░▒▒▒▒▒▒░░░░░░██░░░░██░░██    
                ██░░██▒▒▒▒▒▒░░░░░░░░░░░░░░░░██  
                ██░░██▒▒▒▒▓▓░░░░░░░░░░░░░░░░░░██
      ▓▓▓▓██      ██░░▒▒██░░░░░░░░░░░░░░░░░░░░██
    ██      ██    ████▒▒██░░░░░░░░████░░░░░░██  
  ▓▓          ██      ██▒▒████████░░░░██████    
  ██    ▒▒    ██      ████▒▒▒▒▒▒▒▒░░░░▒▒██      
  ██      ████      ██▒▒▒▒██████████████        
    ██    ░░      ██▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒██          
      ▓▓▓▓      ▓▓▒▒▒▒▒▒▒▒██▒▒▒▒██▒▒▒▒▓▓        
          ████████▒▒▒▒░░░░░░██▒▒▒▒██▒▒▒▒██      
                ██████▓▓██░░██░░░░░░██░░░░▓▓    
              ██░░░░░░░░░░██░░░░░░░░██░░░░██    
              ██░░░░░░░░░░██░░░░░░██▒▒░░██      
              ██▓▓▓▓▓▓▓▓▓▓██▓▓▓▓████▓▓▓▓        
daily reminder that i am code monki                                                                             
*/