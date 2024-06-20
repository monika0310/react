import React, { useState, useEffect } from 'react';

const EditForm = ({ initialData, onSubmit, onCancel }) => {
  const [name, setName] = useState(initialData.name);
  const [age, setAge] = useState(initialData.age);
  const [phone, setPhone] = useState(initialData.phone);
  const [email, setEmail] = useState(initialData.email);

  useEffect(() => {
    setName(initialData.name);
    setAge(initialData.age);
    setPhone(initialData.phone);
    setEmail(initialData.email);
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ ...initialData, name, age, phone, email });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
      <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <button type="submit">Save</button>
      <button type="button" onClick={onCancel}>Cancel</button>
    </form>
  );
};

export default EditForm;

