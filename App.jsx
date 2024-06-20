import React, { useState } from 'react';
import "./App.css";
import DisplayData from './component/DisplayData';
import AddContactForm from './component/AddContactForm';


const ParentComponent = () => {
  // Example initial data state
  const [data, setData] = useState([
    { id: 1, name: 'Item 1', age: 25, phone: '1234567890', email: 'item1@example.com' },
    { id: 2, name: 'Item 2', age: 30, phone: '9876543210', email: 'item2@example.com' },
    { id: 3, name: 'Item 3', age: 28, phone: '5556667777', email: 'item3@example.com' },
  ]);

  // Function to handle adding a new contact
  const handleAdd = (newContact) => {
    const newId = data.length > 0 ? data[data.length - 1].id + 1 : 1;
    const updatedData = [...data, { id: newId, ...newContact }];
    setData(updatedData);
  };

  // Function to handle updating a contact
  const handleUpdate = (updatedItem) => {
    setData(prevData =>
      prevData.map(item => (item.id === updatedItem.id ? updatedItem : item))
    );
  };

  // Function to handle deleting a contact
  const handleDelete = (id) => {
    setData(prevData => prevData.filter(item => item.id !== id));
  };

  return (
    <div className="container">
      {/* Add contact form */}
      <AddContactForm onAdd={handleAdd} />

      {/* Display the current data */}
      <DisplayData data={data} handleUpdate={handleUpdate} handleDelete={handleDelete} />
    </div>
  );
};

export default ParentComponent;
