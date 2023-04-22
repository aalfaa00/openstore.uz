import React from 'react';

function LoginModal({ onClose }) {
  return (
    <div>
      <h2>Login Modal</h2>
      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default LoginModal;