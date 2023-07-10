const newPostHandler = async (event) => {
    event.preventDefault();
    console.log("test");

    const title = document.querySelector('#title-input').value.trim();
    const content = document.querySelector('#post-input').value.trim();

    if (title, content) {
        const response = await fetch('/api/posts', {
            method: 'POST',
            body: JSON.stringify({ title, content }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Failed to create post');
        }
    }
};

const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');
        console.log(id);

        const response = await fetch(`/api/posts/${id}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to delete post!');
        }
    }
};

document.querySelector('.post-form').addEventListener('submit', newPostHandler);

document.querySelector('.post-list').addEventListener('click', delButtonHandler);