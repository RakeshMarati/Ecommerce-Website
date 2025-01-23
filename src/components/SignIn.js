import React, { useState } from 'react';

const SignIn = ({ setUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    // A simple check for demo purposes, you can replace it with actual validation logic.
    if (email === 'rakesh@example.com' && password === 'rakesh') {
      const user = { email };  // You can store more user information here if needed
      localStorage.setItem('user', JSON.stringify(user));  // Store user in localStorage
      setUser(user);  // Update the state in App.js
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div>
      <h2>Sign In</h2>
      <input
        type="email"
        placeholder="Use: rakesh@example.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Use: password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignIn}>Sign In</button>
    </div>
  );
};

export default SignIn;
