// Select elements
const loginBox = document.getElementById('loginBox');
const signUpBox = document.getElementById('signUpBox');
const closeIcons = document.querySelectorAll('.close-icon');
const loginBtn = document.querySelector('.login-Btn');

loginBtn.addEventListener('click', () => {
    if (loginBox.style.display === 'block') {
        loginBox.style.display = 'none';
    } else {
        loginBox.style.display = 'block';
    }
});

// Event listeners for close icons
closeIcons.forEach(icon => {
    icon.addEventListener('click', function() {
        loginBox.style.display = 'none';
        signUpBox.style.display = 'none';
    });
});

const signUpBtn = document.getElementById('showSignUpBox');
const loginBtn2 = document.getElementById('showLoginBox');

signUpBtn.addEventListener('click', () => {
    if (signUpBox.style.display === 'block') {
        signUpBox.style.display = 'none';
    } else {
        signUpBox.style.display = 'block';
        // loginBox.style.display = 'none'; // Hide login box
    }
});

loginBtn2.addEventListener('click', () => {
    if (loginBox.style.display === 'none') {
        loginBox.style.display = 'block';
        // console.log("hello");
        
    } else {
        loginBox.style.display = 'block';
        // console.log("function is not run");
        signUpBox.style.display = 'none';
        
    }
});


// --------------------------title ncert book----------

