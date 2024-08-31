const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const res = await axios.post('/users/login', { email, password });
        localStorage.setItem('token', res.data.token);
        alert('Login successful!');
        window.location.href = 'dashboard.html';
    } catch (err) {
        console.error(err);
        alert('Login failed');
    }
});
