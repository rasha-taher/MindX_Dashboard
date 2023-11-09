import React, { useState } from 'react';

const AddTeacher = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/teacher/addTeacher', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        console.log(data);
        window.alert('Teacher added successfully!');
        // Optionally, you can redirect or show a success message here
      } else {
        console.error('Error:', data.error);
        // Handle error, show error message, etc.
      }
    } catch (error) {
      console.error('Error:', error);
      // Handle network error or other exceptions
    }
  };

  return (
    <div>
      <div className='add-container'>
        <p className='content-title'>Add Teacher</p>
        <form onSubmit={handleSubmit}>
          <div>
            <p>Teacher's Name</p>
            <input
              type="text"
              className="login-input"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <p>Email</p>
            <input
              type="text"
              className="login-input"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <p>Password</p>
            <input
              type="password"
              className="login-input"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="login-button">
            Add Teacher
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTeacher;
