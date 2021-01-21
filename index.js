var rs = require("readline-sync");
var score = 0;
var username = rs.question("May I know your Name? ");

console.log("\n Welcome", username + " to the quiz. Let's find out how well do you know me. ");


function play(question, answer)
{
  var userAnswer = rs.question(question);

  if(userAnswer.toUpperCase() === answer.toUpperCase())
  {
    console.log("\n Right Answer");
    score= score+ 10;
  }
  else
  {
    console.log("\n Wrong Answer");
  }
   console.log("Your Current Score:", score);
    console.log("---------");
}

var questionOne =
{
  question: "\n 1. Where do I live? ",
  answer: "Delhi"
}

var questionTwo = 
{
  question: "2. Where was I born? ",
  answer:"Rohtak"
}

var questionThree = 
{
  question: "3. Which is my favourite sport? ",
  answer: "Cricket"
}
var questionFour = 
{
  question: "4. Who is my favourite cricketer? ",
  answer: "MS Dhoni"
}

var questionFive = 
{
  question: "5. ",
  answer: "Ece"
}
var questions = [questionOne, questionTwo, questionThree, questionFour];

//loop
for(var i=0; i<questions.length; i++)
{
  play(questions[i].question, questions[i].answer)
}


console.log("\n Excellent! Your Final score: ", score);