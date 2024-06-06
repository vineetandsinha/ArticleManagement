document.addEventListener('DOMContentLoaded', function() {
    const editForm = document.querySelector('#edit-form');
    const updateButton = document.querySelector('#update-button');

    if (editForm && updateButton) {
        updateButton.addEventListener('click', function(event) {
            event.preventDefault();

            const formData = new FormData(editForm);
            const articleId = editForm.dataset.articleId;
            const url = `/article/${articleId}/edit`;

            fetch(url, {
                method: 'POST',
                body: formData,
                headers: {
                    'X-Requested-With': 'XMLHttpRequest'
                }
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    alert('Article updated successfully!');
                    // Optionally, update UI or redirect
                } else {
                    alert('Failed to update article');
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
        });
    }
});
