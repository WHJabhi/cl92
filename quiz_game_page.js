player1 = localStorage.getItem("Player1");
player2 = localStorage.getItem("Player2");

player1_score = 0;
player2_score = 0;

document.getElementById("Player1").innerHTML = player1;
document.getElementById("Player2").innerHTML = player2;

document.getElementById("Player1_score").innerHTML = player1_score;
document.getElementById("Player2_score").innerHTML = player2_score;

document.getElementById("Player_question").innerHTML = "Question Turn -"+player1;
document.getElementById("Player_answer").innerHTML =  "Answer Turn -"+player2;

function send(){
    get_word = document.getElementById("word").value;
    word = get_word.toLowerCase();

    charAt1 = word.charAt(1);
    length_divide_2 = Math.floor(word.length/2);
    charAt2 = word.charAt( length_divide_2);
    charAt3 = word.charAt(  word.length-1);
    remove_CharAt1 = word.replace(charAt1,"_");
    remove_CharAt2 = remove_CharAt1.replace(charAt2,"_");
    remove_CharAt3 = remove_CharAt2.replace(charAt3,"_");
    Question_word = "<h4 id='word_display'> Q. "+remove_CharAt3+"</h4>";
    input_box = "<br> Answer: <input type='text' id='user_answer'>";
    check_button = "<br><br><button class='btn btn-info' onclick = 'check()'>Check</button>";
    row = Question_word + input_box + check_button ;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";
    
}