document.getElementById('transformCard').addEventListener('click', function() {
    let destination = document.getElementById('destinationContainer');
    destination.classList.add('full-page'); 
});

document.getElementById('destinationContainer').addEventListener('click', function() {
    let destination = document.getElementById('destinationContainer');
    destination.classList.remove('full-page');
});