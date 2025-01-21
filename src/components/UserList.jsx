import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getUsers, deleteUser } from '../api';
import { useNavigate } from 'react-router-dom';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Load users from mock API (data.json)
  useEffect(() => {
    getUsers().then((data) => {
      setUsers(data);
    }).catch((err) => {
      setError(err);
    });
  }, []);

  const handleDelete = (id) => {
    deleteUser(id)
      .then(() => {
        setUsers(users.filter(user => user.id !== id));  // Remove from local state
      })
      .catch((err) => {
        setError(err);
      });
  };

  return (
    <div>
      <h1>User Management</h1>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <Link to="/users/add">
        <button>Add User</button>
      </Link>
      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Department</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.department || 'N/A'}</td>
              <td>
                <Link to={`/users/edit/${user.id}`}>
                  <button>Edit</button>
                </Link>
                <button onClick={() => handleDelete(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
