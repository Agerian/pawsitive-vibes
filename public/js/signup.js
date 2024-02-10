
const signupFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector('#username-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (username && email && password) {
    // 'fetch' call to send Post request to the backend
    const response = await fetch('/api/signup', {
      method: 'POST',
      body: JSON.stringify({ username, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // Succesful Signup: (Replace with desired action, such as redirecting to dashboard.)
      document.location.replace('/');
    } else {
      // Singup Failure: (Handle response errors)
      alert('Failed to sign up');
    }
  } else {
    alert('Please fill out all fields');
  }
};

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);