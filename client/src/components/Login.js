import React, { useState } from "react";

function Login({ userLogin }) {
  //Define Hook for login
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
    email: "",
  });

  //Define useState function to handle onChange
  const handleLogin = (event) => {
    const field = event.target.name;
    const inputValue = event.target.value;
    setCredentials({ ...credentials, [field]: inputValue });
  };

  const postLogin = (event) => {
    // console.log("before");
    event.preventDefault();
    // console.log("after");
    userLogin(credentials);
  };

  return (
    <div>
      <form>
        {/* Username */}
        <div>
          <input
            type="text"
            name="username"
            placeholder="username"
            onChange={handleLogin}
          ></input>
        </div>
        {/* Password */}
        <div>
          <input
            type="text"
            name="password"
            placeholder="password"
            onChange={handleLogin}
          ></input>
        </div>
        <div>
          <input
            type="text"
            name="email"
            placeholder="email"
            onChange={handleLogin}
          ></input>
        </div>
        {/* Sign in  */}
        <div>
          <button
            // type=""
            value="sign in"
            onClick={(e) => postLogin(e)}
          />
        </div>
      </form>
    </div>
  );
}

export default Login;
