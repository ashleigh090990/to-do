$(function(){
  $('#viewIncompleteTasks').click();
});
  
$("#viewCompletedTasks").click(function () {
  $( "#viewIncompleteTasks").addClass("activeButton")
  $( "#viewCompletedTasks").removeClass("activeButton")
});
      
$("#viewIncompleteTasks").click(function () {
  $( "#viewCompletedTasks").addClass("activeButton")
  $( "#viewIncompleteTasks").removeClass("activeButton")
});