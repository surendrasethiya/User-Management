import data from './data.json';

// Get all users
export const getUsers = () => {
  return new Promise((resolve) => {
    resolve(data);  // Simulating a successful API response
  });
};

// Add a new user
export const addUser = (user) => {
  return new Promise((resolve) => {
    const newUser = { ...user, id: data.length + 1 };
    data.push(newUser);  // Simulate adding to the "database"
    resolve(newUser);  // Returning the new user
  });
};

// Update an existing user
export const updateUser = (updatedUser) => {
  return new Promise((resolve, reject) => {
    const index = data.findIndex((user) => user.id === updatedUser.id);
    if (index !== -1) {
      data[index] = updatedUser;  // Simulate updating the "database"
      resolve(updatedUser);  // Returning the updated user
    } else {
      reject("User not found");
    }
  });
};

// Delete a user
export const deleteUser = (id) => {
  return new Promise((resolve, reject) => {
    const index = data.findIndex((user) => user.id === id);
    if (index !== -1) {
      data.splice(index, 1);  // Simulate deleting from the "database"
      resolve(id);  // Return the deleted user's ID
    } else {
      reject("User not found");
    }
  });
};
