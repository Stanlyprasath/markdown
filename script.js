const input = document.getElementById('markdown-input');
const output = document.getElementById('preview-output');
const downloadBtn = document.getElementById('download-btn');

// 1. Core Function: Convert Markdown to HTML
function updatePreview() {
    const rawValue = input.value;
    
    // Check if the library "marked" is loaded
    if (typeof marked !== 'undefined') {
        output.innerHTML = marked.parse(rawValue);
    } else {
        output.innerHTML = "<p style='color:red'>Error: 'marked' library not loaded. Check internet connection.</p>";
    }
}

// 2. Listen for typing (including Enter key)
input.addEventListener('input', updatePreview);

// 3. Download Feature
downloadBtn.addEventListener('click', () => {
    const blob = new Blob([input.value], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'my-note.md';
    link.click();
});

// 4. Initial placeholder content
input.value = "# Hello World\nType something here to see it update on the right!";
updatePreview();