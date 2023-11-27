const axios = require('axios');

const apiUrl = 'http://localhost:4000/v1/auth/register'; // Replace with your actual API endpoint

// Function to make a POST request to create a user
async function createUser(user) {
  try {
    const response = await axios.post(apiUrl, user);
    console.log(`User created: ${response.data.name}`);
  } catch (error) {
    console.error('Error creating user:', error);
  }
}

// Seed two users
const usersToSeed = [
  {
    name: 'John Doe',
    email: 'john.doe@example.com',
    profilePicture: 'https://i.pravatar.cc/150?u=fake@pravatar.com',
    bio: 'Software Developer',
    password: 'password123',
  },
  {
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    profilePicture: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
    bio: 'Web Designer',
    password: 'password123',
  },
];

// Seed each user
usersToSeed.forEach(async (user) => {
  await createUser(user);
});

