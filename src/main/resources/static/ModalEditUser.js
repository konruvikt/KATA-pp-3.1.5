document.addEventListener('DOMContentLoaded', function() {
    const btn = document.querySelector('#editBtn');
    const modal = new bootstrap.Modal(document.querySelector('#editModal'));
    btn.addEventListener('click', function() {
        modal.show();
    });
});

