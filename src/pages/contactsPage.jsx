import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getContacts } from '../components/contactService/contactService';  
import { Button } from '@mui/material';

const ContactsPage = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();  

  const handleLogout = () => {
    localStorage.removeItem('token');  
    navigate('/login');  
  };

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const contactsData = await getContacts();
        setContacts(contactsData);
        setLoading(false);
      } catch (err) {
        setError('Failed to load contacts');
        setLoading(false);
      }
    };

    fetchContacts();
  }, []);

  if (loading) {
    return <p>Loading contacts...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Your Contacts</h1>
      
      <Button
          variant="contained"
          color="primary"
          onClick={() => navigate('/')}
          sx={{ marginRight: 2 }}
        >
          Back Home
        </Button>
      <button onClick={handleLogout} style={styles.logoutButton}>Logout</button>
      
      <ul style={styles.contactList}>
        {contacts.map((contact) => (
          <li key={contact.id} style={styles.contactItem}>
            <p>Name: {contact.name}</p>
            <p>Email: {contact.email}</p>
            <p>Phone: {contact.phone}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    textAlign: 'center',
  },
  header: {
    color: '#333',
    marginBottom: '20px',
  },
  contactList: {
    listStyleType: 'none',
    padding: 0,
  },
  contactItem: {
    backgroundColor: '#f9f9f9',
    padding: '15px',
    margin: '10px 0',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
  logoutButton: {
    backgroundColor: '#ff4d4f',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginBottom: '20px',
  },
};

export default ContactsPage;
