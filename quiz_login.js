function addUser(){
    var Player_1 = document.getElementById("Player1").value;
    var Player_2 = document.getElementById("Player2").value;
    localStorage.setItem("Player1",Player_1);
    localStorage.setItem("Player2",Player_2);
    window.location("game_page.html");
}