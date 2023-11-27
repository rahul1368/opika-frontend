// api.js

import axios from 'axios';

const apiUrl = 'http://localhost:4000/v1'; // Replace with your actual API endpoint

async function handleApiCall(endpoint, method = 'GET', data = null) {
  const url = `${apiUrl}/${endpoint}`;

  const config = {
    method,
    url,
    headers: {
      'Content-Type': 'application/json',
      // Add any other headers if needed (e.g., authentication headers)
    },
  };

  if (data) {
    config.data = data;
  }

  try {
    const response = await axios(config);

    return response.data;
  } catch (error) {
    console.error('API call error:', error.message);
    throw error;
  }
}

export default handleApiCall;
