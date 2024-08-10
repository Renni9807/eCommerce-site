import React from "react";
import "./ModalLogin.css";

const ModalLogin = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  const handleLogin = async () => {
    const email = document.querySelector('input[placeholder="Email"]').value;
    const password = document.querySelector(
      'input[placeholder="Password"]'
    ).value;

    try {
      const response = await fetch("http://localhost:5050/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Login successful");

        // JWT 토큰을 localStorage에 저장
        localStorage.setItem("token", data.token);

        console.log("User details:", data.user);
      } else {
        alert(data.error || "Login failed");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Login failed");
    }
  };

  return (
    <div className="modal-login-overlay" onClick={onClose}>
      <div className="modal-login-content" onClick={(e) => e.stopPropagation()}>
        <h2>Login to Your Account</h2>
        <form className="modal-login-form">
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="button" onClick={handleLogin}>
            Login
          </button>
        </form>
        <button className="modal-login-close" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default ModalLogin;
