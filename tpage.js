function toggleDropdown(id) {
    document.querySelectorAll('.nav-item').forEach(item => {
        item.id === id
            ? item.classList.toggle('open')
            : item.classList.remove('open');
    });
}
