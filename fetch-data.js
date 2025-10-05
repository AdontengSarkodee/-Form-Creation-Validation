// Detailed Instruction 1: Initialize the Async Function
async function fetchUserData() {
    // Detailed Instruction 2: Define the API URL
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    // Detailed Instruction 3: Select the Data Container Element
    const dataContainer = document.getElementById('api-data');

    // Detailed Instruction 4 & 6: Fetch Data Using try-catch
    try {
        // Fetch data asynchronously
        const response = await fetch(apiUrl);

        // Check for HTTP errors (e.g., 404, 500)
        if (!response.ok) {
            // Throw an error to be caught by the catch block
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Convert the response to JSON
        const users = await response.json();

        // Detailed Instruction 5: Clear the Loading Message
        dataContainer.innerHTML = '';

        // Detailed Instruction 6: Create and Append User List
        const userList = document.createElement('ul');

        // Loop through the users array
        users.forEach(user => {
            const listItem = document.createElement('li');
            // Set the text content to the user's name
            listItem.textContent = user.name;
            // Append the <li> to userList
            userList.appendChild(listItem);
        });

        // After the loop, append userList to dataContainer
        dataContainer.appendChild(userList);

    } catch (error) {
        // Detailed Instruction 7: Error Handling
        console.error('Fetching user data failed:', error);
        
        // Clear the existing content
        dataContainer.innerHTML = ''; 
        
        // Set the error message
        dataContainer.textContent = 'Failed to load user data.';
        dataContainer.style.color = 'red'; // Optional: highlight the error
    }
}

// Detailed Instruction 8: Invoke fetchUserData on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    fetchUserData();
});