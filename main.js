

//empty board 
var gameBoard = [
  '', '', '',
  '', '', '',
  '', '', ''
]

//function to get X and O on click and switch the choice for each turn 
var turn = "X";
 function onClick(event) {
  
 	$(event.target).text(turn);
  gameBoard[event.target.id] = turn 
  winnerCheck(); //sxitch between turns and print value of turn 
 	if(turn === 'X'){ 
  $('#moves').text('X Turn');
   turn='O';
   $(event.target).css('font-size','40px');
   $(event.target).css('color','white');
   $(event.target).css('font-family','courier');
   $(event.target).off('click');//will not allow user to click again in the same cell after game is begin

  }else { 
  $('#moves').text('O Turn');
   turn='X'
   $(event.target).css('font-size','40px');
   $(event.target).css('color','white');
   $(event.target).css('font-family','courier');
   $(event.target).off('click');
 }

}
$('.cells').on('click', onClick)


//chic winner
function winnerCheck() {
  // if top row win show message and play the song 
  if (gameBoard[0] !== '' && gameBoard[0] === gameBoard[1] && gameBoard[1] === gameBoard[2]){
    $("#WinSong").get(0).play();
    swal('Winner is '+ gameBoard[0]).then(() => {
      resetGame();
    });
     
  } else if (gameBoard[3] !== '' && gameBoard[3] === gameBoard[4] && gameBoard[4] === gameBoard[5]){
    // if middle row win  win show message and play the song 
    $("#WinSong").get(0).play();
    swal('Winner is '+ gameBoard[3]).then(() => {
      resetGame();
    });
  
  } else if (gameBoard[6] !== '' && gameBoard[6] === gameBoard[7] && gameBoard[7] === gameBoard[8]){
    // if bottom row win  win show message and play the song 
    $("#WinSong").get(0).play();
    swal('Winner is '+ gameBoard[6]).then(() => {
      resetGame();
    });
  

  }else if (gameBoard[0] !== '' && gameBoard[0] === gameBoard[3] && gameBoard[3] === gameBoard[6]){
    // if left colum win  win show message and play the song 
    $("#WinSong").get(0).play();
    swal('Winner is '+ gameBoard[0]).then(() => {
      resetGame();
    });
 
  } else if (gameBoard[1] !== '' && gameBoard[1] === gameBoard[4] && gameBoard[4] === gameBoard[7]){
    // if middle column win  win show message and play the song 
    $("#WinSong").get(0).play();
    swal('Winner is '+ gameBoard[1]).then(() => {
      resetGame();
    });
  
  } else if (gameBoard[2] !== '' && gameBoard[2] === gameBoard[5] && gameBoard[5] === gameBoard[8]) {
    // if right diagbnol  win show message and play the song 
    $("#WinSong").get(0).play();
    swal('Winner is '+ gameBoard[2]).then(() => {
      resetGame();
    });
  

  } else if (gameBoard[2] !== '' && gameBoard[2] === gameBoard[4] && gameBoard[4] === gameBoard[6]){
  // if right diagnol  win show message and play the song 
  $("#WinSong").get(0).play();
  swal('Winner is '+ gameBoard[2]).then(() => {
    resetGame();
  });
 
}else if (gameBoard[0] !== '' && gameBoard[0] === gameBoard[4] && gameBoard[4] === gameBoard[8]){
// if left diagnol win show message and play the song 
$("#WinSong").get(0).play();
swal('Winner is '+ gameBoard[0]).then(() => {
  resetGame();
});//if No one win
}else if(gameBoard[0] !== ''&& gameBoard[2] !== ''&& gameBoard[3] !== ''&& gameBoard[4] !== ''&& gameBoard[5] !== ''&& gameBoard[6] !== ''&& gameBoard[7] !== ''&& gameBoard[8] !== ''&& gameBoard[9] !== '')
{  swal('No Winners , Try Again!').then(() => {
  resetGame();
});
}}
  
//Reset function to reset the game when the board is full or there is a winner
function resetGame(){
   location.reload();
  $('.cells').text('');
  $('#moves').text(''); 
  $("#WinSong").get(0).pause();//pause song when the function end 
}
$('#reset').on('click',resetGame);