import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { addUser, updateUser } from '../api';
import data from '../data.json';

const UserForm = () => {
  const [user, setUser] = useState({ name: '', email: '', department: '' });
  const [error, setError] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      // Fetch the user details for editing
      const editUser = data.find((u) => u.id === parseInt(id));
      if (editUser) {
        setUser(editUser);
      }
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const userAction = id ? updateUser : addUser;
    userAction(user)
      .then(() => {
        navigate('/users');
      })
      .catch((err) => {
        setError('Failed to save user');
      });
  };

  return (
    <div>
      <h1>{id ? 'Edit' : 'Add'} User</h1>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <form onSubmit={handleSubmit}>
        <label>Name: </label>
        <input
          type="text"
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
        <br />
        <label>Email: </label>
        <input
          type="email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <br />
        <label>Department: </label>
        <input
          type="text"
          value={user.department}
          onChange={(e) => setUser({ ...user, department: e.target.value })}
        />
        <br />
        <button type="submit">{id ? 'Update' : 'Add'} User</button>
      </form>
    </div>
  );
};

export default UserForm;
