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
// Create a <ul> element and store it in a constant named userList
const userList = document.createElement('ul');
// Loop through the users array with forEach
    users.forEach(user => {
      // Create a <li> element
      const li = document.createElement('li');
      // Set the text content of the <li> to the user’s name
      li.textContent = user.name;
      // Append the <li> to userList
      userList.appendChild(li);
    });
    // After the loop, append userList to dataContainer
    dataContainer.appendChild(userList);
  } catch(error){
    // Display error message
    dataContainer.textContent = `Failed to load user data: ${error.message}`;
  }
}
// Call the function to fetch user data on page load
document.addEventListener('DOMContentLoaded', fetchUserData);