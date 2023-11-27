import React, { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  profilePicture: string;
  bio: string;
}

interface UserFormProps {
  onSubmit: (data: FormData) => void;
  initialData?: FormData;
}

const UserForm: React.FC<UserFormProps> = ({ onSubmit, initialData }) => {
  const [formData, setFormData] = useState<FormData>(initialData || { name: '', email: '', profilePicture: '', bio: '' });
  const [touchedFields, setTouchedFields] = useState<Set<string>>(new Set<string>());

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setTouchedFields((prevFields) => new Set(prevFields.add(name)));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const isValidUrl = (url: string): boolean => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isFormValid = (): boolean => {
    return (
      formData.name.trim() !== '' &&
      isValidEmail(formData.email) &&
      isValidUrl(formData.profilePicture) &&
      formData.bio.trim() !== ''
    );
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-semibold mb-4">{initialData ? 'Edit User' : 'Add User'}</h2>
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-gray-600">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="mt-1 p-2 w-full border rounded-md"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-gray-600">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`mt-1 p-2 w-full border rounded-md ${
            touchedFields.has('email') && !isValidEmail(formData.email) ? 'border-red-500' : ''
          }`}
          required
        />
        {touchedFields.has('email') && !isValidEmail(formData.email) && (
          <p className="text-red-500 text-sm mt-1">Please enter a valid email address</p>
        )}
      </div>
      <div className="mb-4">
        <label htmlFor="profilePicture" className="block text-sm font-medium text-gray-600">
          UserProfile URL
        </label>
        <input
          type="url"
          id="profilePicture"
          name="profilePicture"
          value={formData.profilePicture}
          onChange={handleChange}
          className={`mt-1 p-2 w-full border rounded-md ${
            touchedFields.has('profilePicture') && !isValidUrl(formData.profilePicture) ? 'border-red-500' : ''
          }`}
          required
        />
        {touchedFields.has('profilePicture') && !isValidUrl(formData.profilePicture) && (
          <p className="text-red-500 text-sm mt-1">Please enter a valid URL</p>
        )}
      </div>
      <div className="mb-4">
        <label htmlFor="bio" className="block text-sm font-medium text-gray-600">
          Bio
        </label>
        <textarea
          id="bio"
          name="bio"
          value={formData.bio}
          onChange={handleChange}
          className="mt-1 p-2 w-full border rounded-md"
          rows={4}
          required
        ></textarea>
      </div>
      <button type="submit" className={`bg-blue-500 text-white p-2 rounded-md ${!isFormValid() && 'opacity-50'}`} disabled={!isFormValid()}>
        {initialData ? 'Update User' : 'Add User'}
      </button>
    </form>
  );
};

export default UserForm;
