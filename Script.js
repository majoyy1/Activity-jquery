$(document).ready(function () {
  // Register form validation
  $("#registerForm").validate({
    rules: {
      name: "required",
      email: {
        required: true,
        email: true
      },
      password: {
        required: true,
        minlength: 5
      },
      confirm_password: {
        required: true,
        equalTo: "[name='password']"
      }
    },
    messages: {
      name: "Please enter your name",
      email: "Enter a valid email address",
      password: {
        required: "Enter a password",
        minlength: "Password must be at least 5 characters"
      },
      confirm_password: {
        required: "Confirm your password",
        equalTo: "Passwords do not match"
      }
    },
    submitHandler: function (form) {
      alert("Registration successful!");
      window.location.href = "index.html";
    }
  });

  // Login form validation
  $("#loginForm").validate({
    rules: {
      username: "required",
      password: "required"
    },
    messages: {
      username: "Enter your username",
      password: "Enter your password"
    },
    submitHandler: function (form) {
      let username = $("[name='username']").val();
      let password = $("[name='password']").val();

      // Static credentials: admin / 12345
      if (username === "admin" && password === "12345") {
        sessionStorage.setItem("username", username);
        window.location.href = "landing.html";
      } else {
        alert("Invalid login. Try admin / 12345.");
      }
    }
  });
});
