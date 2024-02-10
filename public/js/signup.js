
const handleSignup = async (event) => {
  event.preventDefault();

  const username = document.querySelector('#username').value.trim();
  const email = document.querySelector('#email').value.trim();
  const password = document.querySelector('#password').value.trim();

  console.log('Signup Data:', { username, email, password }); // Log form data 

  try {
    const response = await fetch('/api/signup', {
      method: 'POST',
      body: JSON.stringify({ username, email, password }),
      headers: { 'Content-Type': 'application/json' }
    });

    console.log('Response Status:', response.status); // Log response status code


    if (response.ok) {
      const data = await response.json();
      console.log('Server Response:', data); // Log data sent back from server
      window.location.replace('/dashboard');
    } else {
      const errorMessage = await response.json();
      console.error('Signup Error (Client-Side):', errorMessage);
      createAlert('error', errorMessage.message);
    }
  } catch (error) {
    console.error('Fetch Error (Client-Side):', error);
    createAlert('error', 'Signup failed, please try again');
  }
};

function createAlert(type, message) {
  const alertDiv = document.createElement('div');
  alertDiv.textContent = message;
  alertDiv.classList.add('alert', `alert-${type}`);

  const form = document.querySelector('#signup-form');
  form.insertBefore(alertDiv, form.firstChild);
}

document.querySelector('.signup-form').addEventListener('submit', handleSignup); 


// {/* <style>
// .alert {
//   border: 1px solid;
//   padding: 10px;
//   margin-bottom: 15px; 
// }
// .alert-error { 
//   background-color: #f8d7da;
//   color: #721c24;
// }
// .alert-success { 
//   background-color: #d4edda;
//   color: #155724;
// } */}
