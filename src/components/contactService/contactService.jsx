import axios from 'axios';

const CONTACTS_API_URL = 'https://67068b05a0e04071d22751a8.mockapi.io/contacts';
export const getContacts = async () => {
  try {
    const token = localStorage.getItem('token');
    if (!token) {
      throw new Error('No authentication token found');
    }

    const response = await axios.get(CONTACTS_API_URL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching contacts:', error);
    throw error;
  }
};
