import React, { useState } from "react";
import ModalLogin from "../Components/Modal/ModalLogin";
import "./CSS/LoginSignup.css";

// ID와 이메일 중복 체크 함수
const checkDuplicate = async (id, email) => {
  try {
    const response = await fetch(
      `http://localhost:5050/api/check-duplicate?id=${id}&email=${email}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error checking duplication:", error);
    return { idExists: false, emailExists: false };
  }
};

export const LoginSignup = () => {
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [idValid, setIdValid] = useState(null);
  const [emailValid, setEmailValid] = useState(null);
  const [passwordValid, setPasswordValid] = useState(null);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [agree, setAgree] = useState(false);

  const [activeField, setActiveField] = useState(null);

  const handleIdChange = async (e) => {
    const value = e.target.value;
    setId(value);

    if (value.length > 0) {
      const { idExists } = await checkDuplicate(value, email);
      setIdValid(!idExists);
    } else {
      setIdValid(null);
    }
  };

  const handleEmailChange = async (e) => {
    const value = e.target.value;
    setEmail(value);

    if (value.length > 0) {
      const { emailExists } = await checkDuplicate(id, value);
      setEmailValid(!emailExists);
    } else {
      setEmailValid(null);
    }
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setPasswordValid(value.length >= 6);
  };

  const handleSignUp = async () => {
    if (!idValid || !emailValid || !passwordValid || !agree) {
      alert("Please fill in all fields correctly and agree to the terms.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5050/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: id, email, password }),
      });

      const data = await response.json();

      if (response.status === 201) {
        alert("User created successfully");
      } else {
        alert(data.error || "Sign up failed");
      }
    } catch (error) {
      console.error("Sign up error:", error);
      alert("Sign up failed");
    }
  };

  const handleLoginClick = () => {
    setIsLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  const handleLogout = () => {
    // 로그아웃 시 로컬 스토리지에서 JWT 토큰 삭제
    localStorage.removeItem("token");
    alert("You have been logged out.");
  };

  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <div className="input-container">
            <input
              type="text"
              placeholder="ID"
              value={id}
              onChange={handleIdChange}
              required
              onFocus={() => setActiveField("id")}
              onBlur={() => setActiveField(null)}
            />
            {activeField === "id" &&
              idValid !== null &&
              (idValid ? (
                <span className="valid">✔</span>
              ) : (
                <span className="invalid">✘</span>
              ))}
          </div>
          <div className="input-container">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
              required
              onFocus={() => setActiveField("email")}
              onBlur={() => setActiveField(null)}
            />
            {activeField === "email" &&
              emailValid !== null &&
              (emailValid ? (
                <span className="valid">✔</span>
              ) : (
                <span className="invalid">✘</span>
              ))}
          </div>
          <div className="input-container">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
              required
              onFocus={() => setActiveField("password")}
              onBlur={() => setActiveField(null)}
            />
            {activeField === "password" &&
              passwordValid !== null &&
              (passwordValid ? (
                <span className="valid">✔</span>
              ) : (
                <span className="invalid">✘</span>
              ))}
          </div>
        </div>
        <div className="loginsignup-agree">
          <input
            type="checkbox"
            checked={agree}
            onChange={(e) => setAgree(e.target.checked)}
          />
          <p>I agree to the terms of use & privacy policy.</p>
        </div>
        <button onClick={handleSignUp}>Continue</button>
        <p className="loginsignup-login">
          Already have an account?&nbsp;
          <span onClick={handleLoginClick}>Login</span>
        </p>
        {/* 로그아웃 버튼 */}
        <button onClick={handleLogout}>Logout</button>
      </div>
      <ModalLogin isOpen={isLoginModalOpen} onClose={closeLoginModal} />
    </div>
  );
};

export default LoginSignup;
