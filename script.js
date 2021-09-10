// HTML
const status = document.querySelector('.status');
const restart = document.querySelector('.RS');
const gridSquares = document.querySelectorAll('.grid-square');


//variables
let gameLive = true;
let xNext = true;



//functions

/*
 * Check win/tie condition
 */
const condition = () => {

}

/* 
 * if reset button has been selected, board will be wiped
 */
const rsGame = (e) => {
  console.log(e);
};

/*
 * each click of a square will produce a mark based on player
 */
const markSquare = (e) => {
  cl = e.target.classList;
  sqNum = cl[1];
  console.log("SQ#",sqNum);
  //if square is occupied
  if(cl[2]){
    console.log("taken",cl[2]);
    return;
  }

  //marks the correct marker
  if(xNext){
    console.log(e.target);
    cl.add('x');
  } else {
    cl.add('o');
  }
  //swaps back
  xNext = !xNext;
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