import React, { useState } from 'react';
import { submitForm } from '../api/api';

const UserForm = () => {
  const [name, setName] = useState('');
  const [socialMediaHandle, setSocialMediaHandle] = useState('');
  const [images, setImages] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('socialMediaHandle', socialMediaHandle);
    images.forEach(image => formData.append('images', image));

    try {
      await submitForm(formData);
      alert('Form submitted successfully');
      window.location.reload();
    } catch (error) {
      console.error(error);
      alert('Error submitting form');
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">User Submission Form</h2>
      <form onSubmit={handleSubmit} className="p-4 border rounded shadow-sm">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            id="name"
            className="form-control"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="socialMediaHandle" className="form-label">Social Media Handle</label>
          <input
            type="text"
            id="socialMediaHandle"
            className="form-control"
            placeholder="Enter your social media handle"
            value={socialMediaHandle}
            onChange={(e) => setSocialMediaHandle(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="images" className="form-label">Upload Images</label>
          <input
            type="file"
            id="images"
            className="form-control"
            multiple
            onChange={(e) => setImages(Array.from(e.target.files))}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">Submit</button>
      </form>
      <footer className="bg-dark text-white text-center py-2 mt-5">
      <p className="mb-0">&copy; 2025 User Submission System</p>
    </footer>
    </div>
  );
};

export default UserForm;
