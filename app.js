$(document).ready(function () {
  $("#usernamevalidation").hide();
  $("#passwordvalidation").hide();
  $("#confirmpasswordvalidation").hide();

  var Error = true;
  var password_error = true;
  var confirm_password_error = true;

  // username validaiton
  $("#username").keyup(function () {
    username_validaiton();
  });

  function username_validaiton() {
    var username_val = $("#username").val();

    if (username_val.length == "") {
      $("#usernamevalidation").show();
      $("#usernamevalidation").html("username cannot be empty");
      $("#usernamevalidation").css("color", "red");
      Error = false;
      return false;
    } else {
      $("#usernamevalidation").hide();
    }
    if (username_val.length < 3 || username_val.length > 10) {
      $("#usernamevalidation").show();
      $("#usernamevalidation").html("invalid username");
      $("#usernamevalidation").css("color", "red");
      Error = false;
      return false;
    } else {
      $("#usernamevalidation").hide();
    }
  }

  //   password validation
  $("#password").keyup(function () {
    password_validation();
  });

  function password_validation() {
    var password_val = $("#password").val();

    if (password_val.length == "") {
      $("#passwordvalidation").show();
      $("#passwordvalidation").html("password cannot be empty");
      $("#passwordvalidation").css("color", "red");
      password_error = false;
      return false;
    } else {
      $("#passwordvalidation").hide();
    }

    if (password_val.length < 8) {
      $("#passwordvalidation").show();
      $("#passwordvalidation").html(
        "password length should be atleast 8 characters"
      );
      $("#passwordvalidation").css("color", "red");
      password_error = false;
      return false;
    } else {
      $("#passwordvalidation").hide();
    }
  }

  //   confrim password validation
  $("confirmpassword").keyup(function () {
    confirm_password_validation();
  });

  function confirm_password_validation() {
    var confirm_password_val = $("#confirmpassword").val();
    var password_val = $("#password").val();

    if (confirm_password_val != password_val) {
      $("#confirmpasswordvalidation").show();
      $("#confirmpasswordvalidation").html("password does not matches");
      $("#confirmpasswordvalidation").css("color", "red");
      confirm_password_error = false;
      return false;
    } else {
      $("#confirmpasswordvalidation").hide();
    }
  }

  $("submitvalidation").click(function () {
    username_validaiton();
    password_validation();
    confirm_password_validation();

    if (
      Error == true &&
      password_error == true &&
      confirm_password_error == true
    ) {
      return true;
    } else {
      return false;
    }
  });
});
