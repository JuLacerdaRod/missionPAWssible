import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./LoginForm.css";

function LoginForm() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const history = useHistory();

  // (e) stands for event but can be called anything
  const handleChange = (e) => {
    const { id, value } = e.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [id]: value,
    }));
  };

  const postData = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}api-token-auth/`,
      {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      }
    );
    return response.json();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (credentials.username && credentials.password) {
      postData().then((response) => {
        window.localStorage.setItem("token", response.token);
        console.log(window.location);
        window.location = `${window.location.origin}/`;
      });
    }
  };

  return (
    <div className="login-page">
      <div className="main">
        <p className="sign-in" align="center">
          Sign in
        </p>
        <form>
          <label htmlFor="username">Username:</label>
          <input
            className="field"
            type="text"
            id="username"
            placeholder="Enter username"
            onChange={handleChange}
          />
          <div>
            <label htmlFor="password">Password:</label>
            <input
              className="field"
              type="password"
              id="password"
              placeholder="Password"
              onChange={handleChange}
            />
          </div>
          <button className="submit" type="submit" onClick={handleSubmit}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
