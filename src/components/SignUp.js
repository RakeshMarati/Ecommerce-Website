import React, { useState } from 'react';

const SignUp = ({ setUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    // You can add validation and save the user data to your backend or localStorage.
    const user = { email };
    localStorage.setItem('user', JSON.stringify(user));  // Store user in localStorage
    setUser(user);  // Update the user state in App.js
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignUp}>Sign Up</button>
    </div>
  );
};

export default SignUp;
