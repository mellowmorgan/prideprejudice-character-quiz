$(document).ready(function(){
  $("form#quiz").submit(function(event){
   
   
   const question1 = $("input:radio[name=question-1]:checked").val();
   const question2 = $("input:radio[name=question-2]:checked").val();
   const question3 = $("input:radio[name=question-3]:checked").val();
    let result;
   if ((question1==="darcy" && question2==="darcy") || (question2==="darcy" && question3==="darcy") || (question1==="darcy" && question3==="darcy")){
      result="Darcy";
   }
   else if ((question1==="lydia" && question2==="lydia") || (question2==="lydia" && question3==="lydia") || (question1==="lydia" && question3==="lydia")){
    result="Lydia";
 }
 else if ((question1==="jane" && question2==="jane") || (question2==="jane" && question3==="jane") || (question1==="jane" && question3==="jane")){
  result="Jane";
}
else if ((question1==="elizabeth" && question2==="elizabeth") || (question2==="elizabeth" && question3==="lydia") || (question1==="elizabeth" && question3==="elizabeth")){
  result="Elizabeth";
}
else if ((question1==="bingley" && question2==="bingley") || (question2==="bingley" && question3==="bingley") || (question1==="bingley" && question3==="bingley")){
  result="Bingley";
}
else if ((question1==="mary" && question2==="mary") || (question2=="mary" && question3==="mary") || (question1==="mary" && question3==="mary")){
  result="Mary";
}
else{
  result="no one"
}

   $("#result-div").show();
    $("#result").text(result);
    event.preventDefault();

  });

});