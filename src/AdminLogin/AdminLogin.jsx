
import { useState } from "react";
import { useNavigate } from "react-router-dom";



const AdminLogin = () => {


  const navigate = useNavigate();

  const ADMIN_EMAIL = 'admin@example.com';
  const ADMIN_PASSWORD = 'admin123';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      localStorage.setItem('auth', 'true');
      navigate('/dashboard');
    } else {
      setError('Wrong credentials');
    }
  };

    return (
        <div>

<div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">Admin Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mb-4"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mb-4"
            required
          />
          {error && <p className="text-red-500 mb-4 text-sm">{error}</p>}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>

      </div>
    </div>
            
        </div>
    );
};

export default AdminLogin;