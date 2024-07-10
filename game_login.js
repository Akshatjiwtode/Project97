// Create function addUser()
function addUser() {
  // Get value of user by id player1_name_input and player2_name_input
  player1 = document.getElementById("player1_name_input").value;
  player2 = document.getElementById("player2_name_input").value;

  // Store these values locally
  localStorage.setItem("Player1_name_input",player1);
  localStorage.setItem("Player2_name_input",player2);
  //Assign "game_page.html" to window.location
  window.location = "game_page.html";
}

