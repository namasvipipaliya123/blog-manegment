const signupForm = document.getElementById('signupForm');

signupForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const res = await axios.post('/users/signup', { username, email, password });
        alert('Signup successful!');
        window.location.href = 'login.html';
    } catch (err) {
        console.error(err);
        alert('Signup failed');
    }
});
