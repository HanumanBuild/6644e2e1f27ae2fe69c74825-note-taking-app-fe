import axios from '../axiosConfig';

const handleLogin = async (username, password) => {
  try {
    const response = await axios.post('/api/auth/login', { username, password });
    console.log('Login successful:', response.data);
  } catch (error) {
    console.error('Login error:', error.response.data);
  }
};