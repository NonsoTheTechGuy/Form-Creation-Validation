// ...existing code...
async function fetchUserData() {
// Select the container where user data will be displayed
const dataContainer = document.getElementById('api-data');

// Define the API endpoint
const apiUrl = 'https://jsonplaceholder.typicode.com/users';

try {
// Fetch user data asynchronously
const response = await fetch(apiUrl);
if (!response.ok) {
  throw new Error(`HTTP error! Status: ${response.status}`);
}
const users = await response.json();
// Clear the loading message
dataContainer.innerHTML = '';
// Create a list of user names
const ul = document.createElement('ul');
users.forEach(user => {
    const li = document.createElement('li');
    li.textContent = user.name;
    ul.appendChild(li);
});
    dataContainer.appendChild(ul);
  } catch(error){
    // Display error message
    dataContainer.textContent = `Failed to load user data: ${error.message}`;
  }
}
// Call the function to fetch user data on page load
document.addEventListener('DOMContentLoaded', fetchUserData);
// ...existing code...