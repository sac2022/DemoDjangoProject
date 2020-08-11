/* Inpired by Jee Dribbble Shot ( http://dribbble.com/shots/770815-Login ) */
/* coded by alireza attari ( @alireza_attari ) */
let $password = $("#Password");
$(function(){

  $('#eye').click(function(){

        if($(this).hasClass('fa-eye-slash')){

          $(this).removeClass('fa-eye-slash');

          $(this).addClass('fa-eye');

          $($password).attr('type','text');

        }else{

          $(this).removeClass('fa-eye');

          $(this).addClass('fa-eye-slash');

          $($password).attr('type','password');
        }
    });
});





function isPasswordValid() {
    return $password.val().length > 8;
}


function passwordEvent() {
    //Find out if password is valid
    if (isPasswordValid()) {
        //Hide hint if valid
        $password.next().hide();
    } else {
        //else show hint
        $password.next().show();
    }
}

function canSubmit() {
  return isPasswordValid();
}
function enableSubmit_Event() {
    $("#submit").prop("disabled", !canSubmit());
}
 $('#subtn').click(function() {
   webkitURL.href = 'signup' + this.id;
 });
$password.focus(passwordEvent).keyup(enableSubmit_Event());
enableSubmit_Event();