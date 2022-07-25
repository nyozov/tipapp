$(document).ready(function(){
 
  $('.tip-button').click(function(){
   console.log(($(this).attr('value')))
   console.log($('#amount').val())
   $('#tip-calculated').text(($(this).attr('value')) * $('#amount').val())
 
  });
});