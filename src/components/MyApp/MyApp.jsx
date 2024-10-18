import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../../redux/slices/contactsSlice';
import ContactForm from '../../components/Form/Form';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';
import Loader from '../Loader/Loader';

const App = () => {
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector((state) => state.contacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <Filter />
      {isLoading && <Loader />}
      {error && <p>{error}</p>}
      <ContactList />
    </div>
  );
};

export default App;
