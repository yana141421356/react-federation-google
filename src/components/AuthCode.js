import React from 'react';
import { useNavigate } from 'react-router-dom';

const AuthCode = () => {
  const navigate = useNavigate();

  const handleAuthCodeSubmit = () => {
    // 認証コードをチェック (ここではダミー処理)
    navigate('/top');
  };

  return (
    <div>
      <h1>Enter Authentication Code</h1>
      <input type="text" placeholder="Authentication Code" />
      <button onClick={handleAuthCodeSubmit}>Submit</button>
    </div>
  );
};

export default AuthCode;
