const mockBackend = "https://crudcrud.com/api/49b54a659c37444badaa69070d61b85a";

function registerUser(event) {
  event.preventDefault();
  const email = document
    .getElementById("register__email_input")
    .value.toLowerCase(); // toLowerCase to avoid case sensitive password
  const password = document.getElementById("register__password__input").value;

  localStorage.removeItem("userID");
  localStorage.removeItem("userEmail");

  fetch(mockBackend + "/users")
    .then((response) => response.json())
    .then((users) => {
      const existingUser = users.find((u) => u.email === email);
      if (existingUser) {
        alert("Email is already registered."); // Avoiding registration spamming.
        throw new Error("Email already exists");
      }

      const loginData = {
        email,
        password,
        favorites: [], // Initializing empty array to use for favorites/wishlist functionality.
      };

      return fetch(mockBackend + "/users", { // Posting loginData to crudcrud backend.
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });
    })
    .then((response) => response.json())
    .then((data) => {
      console.log("Registration Successful", data);
      toggleForms();
    })
    .catch((error) => console.error("Error:", error));
}

document.addEventListener('DOMContentLoaded', function() {
  const loginForm = document.getElementById('login__form');
  const registrationForm = document.getElementById('registration__form');
  const toggleFormsButton = document.getElementById('toggle__forms');

  loginForm.addEventListener('submit', loginUser);
  registrationForm.addEventListener('submit', registerUser);
  toggleFormsButton.addEventListener('click', toggleForms);
});


function loginUser(event) {
  event.preventDefault();
  const email = document
    .getElementById("login__email__input")
    .value.toLowerCase();
  const password = document.getElementById("login__password__input").value;

  fetch(mockBackend + "/users")
    .then((response) => response.json())
    .then((users) => {
      const user = users.find(
        (u) => u.email === email && u.password === password
      );
      if (user) {
        console.log("Login Successful", user);
        localStorage.setItem("userID", user._id); // Adding userID and email to localStorage to simplify usage with selection and favorites.
        localStorage.setItem("userEmail", email);
        alert("Login Successful!");
        document.getElementById("login__form").style.display = "none";
        document.getElementById("toggle__forms").style.display = "none"; // Hiding login-element when logging in.
      } else {
        console.log("Login Failed: Invalid credentials");
        alert("Login Failed: Username or Password");
      }
    })
    .catch((error) => console.error("Error:", error));
}

function toggleForms() {
  const loginForm = document.getElementById("login__form");
  const registrationForm = document.getElementById("registration__form"); // Toggling between register/login forms.

  if (loginForm.style.display === "none") {
    loginForm.style.display = "block";
    registrationForm.style.display = "none";
  } else {
    loginForm.style.display = "none";
    registrationForm.style.display = "block";
  }
}

// Sources:

// Register/Login: https://stackoverflow.com/questions/77162708/javascript-role-based-access-failed
// Inspiration for login/register toggle:  https://stackoverflow.com/questions/71790502/how-to-properly-write-a-javascript-toggle-hide-show-function-for-2-forms-regist
