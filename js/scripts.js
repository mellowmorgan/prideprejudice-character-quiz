function characterQuestionEval(question1,question2,question3,question4){
  let result;
  if ((question1==="darcy" && question2==="darcy") || (question2==="darcy" && question3==="darcy") || (question1==="darcy" && question3==="darcy") || (question1==="darcy" && question4==="darcy")  || (question2==="darcy" && question4==="darcy")  || (question3==="darcy" && question4==="darcy")){
    result="Darcy";
  }
  else if ((question1==="lydia" && question2==="lydia") || (question2==="lydia" && question3==="lydia") || (question1==="lydia" && question3==="lydia")|| (question1==="lydia" && question4==="lydia")  || (question2==="lydia" && question4==="lydia")  || (question3==="lydia" && question4==="lydia")){
  result="Lydia";
  }
  else if ((question1==="jane" && question2==="jane") || (question2==="jane" && question3==="jane") || (question1==="jane" && question3==="jane")|| (question1==="jane" && question4==="jane")  || (question2==="jane" && question4==="jane")  || (question3==="jane" && question4==="jane")){
  result="Jane";
  }
  else if ((question1==="elizabeth" && question2==="elizabeth") || (question2==="elizabeth" && question3==="elizabeth") || (question1==="elizabeth" && question3==="elizabeth")|| (question1==="elizabeth" && question4==="elizabeth")  || (question2==="elizabeth" && question4==="elizabeth")  || (question3==="elizabeth" && question4==="elizabeth")){
  result="Elizabeth";
  }
  else if ((question1==="bingley" && question2==="bingley") || (question2==="bingley" && question3==="bingley") || (question1==="bingley" && question3==="bingley")|| (question1==="bingley" && question4==="bingley")  || (question2==="bingley" && question4==="bingley")  || (question3==="bingley" && question4==="bingley")){
  result="Bingley";
  }
  else if ((question1==="mary" && question2==="mary") || (question2=="mary" && question3==="mary") || (question1==="mary" && question3==="mary")|| (question1==="mary" && question4==="mary")  || (question2==="mary" && question4==="mary")  || (question3==="mary" && question4==="mary")){
  result="Mary";
  }
  else{
  result="no one"
  }
  return result;
}

$(document).ready(function(){
  $("form#quiz").submit(function(event){
    event.preventDefault();
   
   const q1 = $("input:radio[name=question-1]:checked").val();
   const q2 = $("input:radio[name=question-2]:checked").val();
   const q3 = $("input:radio[name=question-3]:checked").val();
   const q4 = $("input:radio[name=question-3]:checked").val();
    let character = characterQuestionEval(q1,q2,q3,q4);
    
    $("#result-div").show();
    $("#result").text(character);
    

  });

});