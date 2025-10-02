$(document).ready(function() {

  // ---------------- REGISTER ----------------
  $("#registerForm").submit(function(e) {
    e.preventDefault(); // stop refresh

    let username = $("[name='regUsername']").val();
    let password = $("[name='regPassword']").val();
    let confirmPassword = $("[name='confirmPassword']").val();

    if (username === "" || password === "" || confirmPassword === "") {
      alert("All fields are required!");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // save account to sessionStorage
    let newUser = { username: username, password: password };
    sessionStorage.setItem("registeredUser", JSON.stringify(newUser));

    alert("Registration successful! You can now login.");
    window.location.href = "index.html";
  });


  // ---------------- LOGIN ----------------
  $("#loginForm").submit(function(e) {
    e.preventDefault(); // stop refresh

    let username = $("[name='loginUsername']").val();
    let password = $("[name='loginPassword']").val();
    let storedUser = JSON.parse(sessionStorage.getItem("registeredUser"));

    // check static admin account OR registered account
    if ((username === "admin" && password === "12345") ||
        (storedUser && username === storedUser.username && password === storedUser.password)) {

      sessionStorage.setItem("username", username); // save active session
      window.location.href = "landing.html"; // redirect
    } else {
      alert("Invalid login. Try again.");
    }
  });

});
