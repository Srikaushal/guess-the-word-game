player1_name = localStorage.getItem("player1_name");
 player2_name = localStorage.getItem("player2_name");
player1_score = 0;
player2_score = 0;
document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";
document.getElementById("player1_score").innerHTML = player1_score ;
document.getElementById("player2_score").innerHTML = player2_score ;
document.getElementById("player_question_h3").innerHTML = "Question Turn - " + player1_name ;
document.getElementById("player_answer_h3").innerHTML = "Answer Turn - " + player2_name ;

function send(){
    word= document.getElementById("word").value;
    word_lowercase= word.toLowerCase();
    console.log(word_lowercase);

    charAT_1= word_lowercase.charAt(1);
    console.log(charAT_1);

    middle_position= Math.floor(word_lowercase.length/2);
    charAT_2= word_lowercase.charAt(middle_position);
    console.log(charAT_2);

    end_position= word_lowercase.length-1;
    charAT_3= word_lowercase.charAt(end_position);
    console.log(charAT_3);

    word_1= word_lowercase.replace(charAT_1,"_");
    word_2= word_1.replace(charAT_2,"_");
    final_word= word_2.replace(charAT_3,"_");

    question_word = "<h4 id='word_display'> Q. "+final_word+"</h4>";
     input_box = "<br>Answer : <input type='text' id='input_check_box'>";
      check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
       row = question_word + input_box + check_button ;
        document.getElementById("output").innerHTML = row;
         document.getElementById("word").value = "";

}

question_turn="player_1";
answer_turn="player_2";

function check(){
answer_word= document.getElementById("input_check_box").value;
answer_lowercase= answer_word.toLowerCase();
console.log(answer_lowercase);

if (word_lowercase==answer_lowercase){
    if (answer_turn=="player_2"){
        player2_score= player2_score+1;
        document.getElementById("player2_score").innerHTML= player2_score;
    } 
    else{
        player1_score= player1_score+1;
        document.getElementById("player1_score").innerHTML= player1_score;
    }

}
 
if (question_turn=="player_1"){
    question_turn="player_2";
    document.getElementById("player_question_h3").innerHTML = "Question Turn - " + player2_name ;
}
else {
    question_turn="player_1";
    document.getElementById("player_question_h3").innerHTML = "Question Turn - " + player1_name ;
}

if (answer_turn=="player_1"){
    answer_turn="player_2";
    document.getElementById("player_answer_h3").innerHTML = "Answer Turn - " + player2_name ;

}
else{
    answer_turn="player_1";
    document.getElementById("player_answer_h3").innerHTML = "Answer Turn - " + player1_name ;
}

document.getElementById("output").innerHTML="";
}
