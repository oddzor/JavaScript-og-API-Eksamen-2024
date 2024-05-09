const mockBackend = 'https://crudcrud.com/api/5c53611766ca403fb65138445e8faa72';

function registerUser(event) {
    event.preventDefault();
    const email = document.getElementById('register__email_input').value;
    const password = document.getElementById('register__password__input').value;

    const loginData = {
        email,
        password
    };

    fetch(mockBackend + '/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginData)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Registration Successful', data);
        alert('Registration Successful!');
        toggleForms();
    })
    .catch(error => console.error('Error:', error));
}

function loginUser(event) {
    event.preventDefault();
    const email = document.getElementById('login__email__input').value;
    const password = document.getElementById('login__password__input').value;

    fetch(mockBackend + '/users')
    .then(response => response.json())
    .then(users => {
        const user = users.find(u => u.email === email && u.password === password);
        if (user) {
            console.log('Login Successful', user);
            alert('Login Successful!');
            document.getElementById("login__form").style.display = "none";
            document.getElementById("toggle__forms").style.display = "none";
        } else {
            console.log('Login Failed: Invalid credentials');
            alert('Login Failed: Username or Password');
        }
    })
    .catch(error => console.error('Error:', error));
}

function toggleForms() {
    const loginForm = document.getElementById('login__form');
    const registrationForm = document.getElementById('registration__form');

    if (loginForm.style.display === "none") {
        loginForm.style.display = "block";
        registrationForm.style.display = "none";
    } else {
        loginForm.style.display = "none";
        registrationForm.style.display = "block";
    }
}



// Sources: 

// Toggle login/register https://stackoverflow.com/questions/71790502/how-to-properly-write-a-javascript-toggle-hide-show-function-for-2-forms-regist