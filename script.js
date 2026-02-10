// script.js

// Search functionality
function searchItems() {
    const input = document.getElementById('search-input').value;
    const items = document.querySelectorAll('.item');
    items.forEach(item => {
        if (item.textContent.includes(input)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// Copy functionality
function copyToClipboard() {
    const input = document.getElementById('copy-input');
    input.select();
    document.execCommand('copy');
    alert('Copied to clipboard!');
}