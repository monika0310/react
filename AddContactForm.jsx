import React, { useState } from 'react';

const AddContactForm = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validation for phone number (10 digits) and email (contains @)
    if (validatePhone(phone) && validateEmail(email)) {
      onAdd({ name, age: parseInt(age), phone, email });
      setName('');
      setAge('');
      setPhone('');
      setEmail('');
    } else {
      alert('Phone number must be 10 digits long and email must be valid.');
    }
  };

  const validatePhone = (phone) => {
    return /^[0-9]{10}$/.test(phone);
  };

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  return (
    <form onSubmit={handleSubmit} className="add-contact-form">
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        required
      />
      <input
        type="tel"
        placeholder="Phone (10 digits)"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        pattern="[0-9]{10}"
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button type="submit">Add Contact</button>
    </form>
  );
};




export default AddContactForm;

