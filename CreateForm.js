import React, { useState } from 'react'; 
 
const CreateForm = ({ onSubmit }) => { 
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    phone: '' 
  }); 
 
  const handleChange = (e) => { 
    const { name, value } = e.target; 
    setFormData(prevState => ({ 
      ...prevState, 
      [name]: value 
    })); 
  }; 
 
  const handleSubmit = (e) => { 
    e.preventDefault(); 
    // Perform validation 
    if (formData.name && formData.email && formData.phone) { 
      onSubmit(formData); // Pass formData to parent component or service for submission 
      setFormData({ name: '', email: '', phone: '' }); // Clear form after submission 
    } else { 
      alert('Please fill out all fields.'); 
    }
     
  }; 
 
  return ( 
    <form onSubmit={handleSubmit}> 
      <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" /> 
      <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" /> 
      <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" /> 
      <button type="submit">Add</button> 
    </form> 
  ); 
}; 
 
export default CreateForm;
