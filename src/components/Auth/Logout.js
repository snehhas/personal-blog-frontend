import React from 'react';
import axios from 'axios';

const Logout = ({ token, setToken }) => {
  const handleLogout = async () => {
    try {
      await axios.post(
        'http://localhost:8000/logout/',
        {},
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );
      setToken(null);
      alert('Logout successful');
    } catch (error) {
      alert('Error during logout');
    }
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default Logout;
