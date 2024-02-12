document.addEventListener('DOMContentLoaded', (event) => {
  if (event) {
    console.info('DOM loaded');
  }

  const createPostForm = document.getElementById('new-post-form');

  if (createPostForm) {
    createPostForm.addEventListener('submit', (e) => {
      e.preventDefault();

      // Collect form data
      const postData = {
        title: document.getElementById('post-title').value.trim(),
        content: document.getElementById('post-content').value.trim(),
      };
      console.log(postData,"Post Data")
      // Send a POST request to the server
      fetch('/api/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      })
      .then((response) => response.json())
      .then((data) => {
        alert('Post created successfully!');
        window.location.href = '/dashboard'; //added dashboard josh
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('Failed to create post');
      });
    });
  }
});
