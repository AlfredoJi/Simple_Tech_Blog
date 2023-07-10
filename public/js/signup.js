const signupFormHandler = async (event) => {
    event.preventDefault();

    const email = document.querySelector('#input-email').value.trim();
    const password = document.querySelector('#input-password').value.trim();
    const name = document.querySelector('#input-name').value.trim();

    if (email && password && name) {
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({ name, email, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert(response.statusText);
        }
    }
};

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);