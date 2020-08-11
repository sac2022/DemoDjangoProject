//Problem: Hints are shown even when form is valid
//Solution: Hide and show them at appropriate times
let $password = $("#Password");
let $email = $("#Email");
let $confirmPassword = $("#confirm_password");

//Hide hints
$("form span").hide();

function EmailValidate() {
    const filter = /^([a-zA-Z0-9_.\-])+@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (!filter.test($email.value)) {
        alert('Please provide a proper valid email address');
        $email.focus();
        return false;
    }
}

function isPasswordValid() {
  return $password.val().length > 8;

}

function arePasswordsMatching() {
        return $password.val() === $confirmPassword.val();
}

function canSubmit() {
  return isPasswordValid() && arePasswordsMatching() && EmailValidate();
}

function passwordEvent(){
    //Find out if password is valid
    if(isPasswordValid()) {
      //Hide hint if valid
      $password.next().hide();
    } else {
      //else show hint
      $password.next().show();
    }
}

function confirmPasswordEvent() {
  //Find out if password and confirmation match
  if(arePasswordsMatching()) {
    //Hide hint if match
    $confirmPassword.next().hide();
  } else {
    //else show hint
    $confirmPassword.next().show();
  }
}

function enableSubmitEvent() {
  $("#submit").prop("disabled", !canSubmit());
}

//When event happens on password input
$password.focus(passwordEvent).keyup(passwordEvent).keyup(confirmPasswordEvent());

//When event happens on confirmation input
$confirmPassword.focus(confirmPasswordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent());
$email.focus(enableSubmitEvent())
enableSubmitEvent();