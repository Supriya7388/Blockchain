

import React from 'react';

const LoginPage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Login</h1>
      <form style={styles.form}>
        <input
          type="text"
          placeholder="Username"
          style={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          style={styles.input}
        />
        <input
          type="password"
          placeholder="MetaMask Password"
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Login</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    // backgroundColor: '#f0f2f5',
  },
  heading: {
    color: 'white',
    fontSize: '32px',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '300px',
  },
  input: {
    width: '100%',
    padding: '15px', // Increased padding for bigger placeholders
    fontSize: '16px',
    marginBottom: '15px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  button: {
    width: '100%', // Ensuring button takes full width of form
    padding: '15px', // Increased padding for bigger button
    fontSize: '16px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#007bff',
    color: '#fff',
    cursor: 'pointer',
  },
};

export default LoginPage;
