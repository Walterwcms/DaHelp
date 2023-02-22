

// Get the search bar and file list elements
const searchBar = document.getElementById('search-bar');
const fileList = document.getElementById('file-list');

// Add event listener to search bar
searchBar.addEventListener('input', function() {
  // Get the search query
  const query = searchBar.value.toLowerCase();
  
  // Filter the list of files based on the search query
  const files = Array.from(fileList.getElementsByTagName('li'));
  files.forEach(function(file) {
    const fileName = file.textContent.toLowerCase();
    if (fileName.includes(query)) {
      file.style.display = 'block';
    } else {
      file.style.display = 'none';
    }
  });
});
