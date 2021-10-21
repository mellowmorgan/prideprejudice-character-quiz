$(document).ready(function(){
  $("form#quiz").submit(function(event){
   event.preventDefault();
   
   const question1 = $("input:radio[name=question-1]:checked").val();
   const question2 = $("input:radio[name=question-2]:checked").val();
   const question3 = $("input:radio[name=question-3]:checked").val();
   $("#result-div").show();
    $("#result").text(question1+" "+question2+" "+question3);

  });

});