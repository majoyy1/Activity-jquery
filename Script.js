$(document).ready(function () {
  // Registration Validation
  $("#registerForm").validate({
    rules: {
      username: "required",
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
      username: "Enter a username",
      name: "Enter your full name",
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
      // Save registered user to sessionStorage
      let userData = {
        username: $("[name='username']").val(),
        password: $("[name='password']").val()
      };
      sessionStorage.setItem("registeredUser", JSON.stringify(userData));

      alert("Registration successful! You can now login.");
      window.location.href = "index.html";
    }
  });

  // Login Validation
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

      // Get registered user
      let storedUser = JSON.parse(sessionStorage.getItem("registeredUser"));

      // Allow static account (admin/12345) OR registered user
      if ((username === "admin" && password === "12345") ||
          (storedUser && username === storedUser.username && password === storedUser.password)) {
        sessionStorage.setItem("username", username);
        window.location.href = "landing.html"; // ✅ redirect works
      } else {
        alert("Invalid login. Try again.");
      }
    }
  });
});
