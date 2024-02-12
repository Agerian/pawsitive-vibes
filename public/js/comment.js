document.addEventListener('DOMContentLoaded', (event) => {
    if (event) {
        console.info('DOM loaded comment.js');
    }
    event.preventDefault()
    const createPostForm = document.querySelectorAll('.commbutton')
    console.log(createPostForm, "Create Post Form")

    
    if (createPostForm) {

        createPostForm.forEach(element => element.addEventListener('click', (e) => {
            e.preventDefault();
            const post_id = e.target.getAttribute('data-postid')
          //  console.log(e.target.closest('.comment-text').querySelector('[name=content]'))
            console.log(e.target, "Comment Text",e.target.previousElementSibling.value)
            // Collect form data
            const postData = {
                //content: document.getElementsByName('commbutton').value.trim(),
                content: e.target.previousElementSibling.value.trim()
            };
            console.log(postData, "Post Data", post_id)
            // Send a POST request to the server
               fetch(`api/posts/${post_id}/comments`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(postData),
               })
                .then((response) => response.json())
                .then((data) => {
                    alert('Post created successfully!');
                    window.location.href = '/';
                })
                .catch((error) => {
                    console.error('Error:', error);
                    alert('Failed to create post');
                });
        }));
    }
});