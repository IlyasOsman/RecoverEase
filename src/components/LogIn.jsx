import "./login.css";
const LogIn = () => {
  return (
    <div className="login-section">
      <div className="form-header">
        <h1>Welcome Back!</h1>
      </div>
      <form action="">
        <label htmlFor="">Username</label>
        <input type="text" name="" id="" />

        <label htmlFor="">Password</label>
        <input type="password" name="" id="" />

        <button type="submit">Submit</button>

        <p>
          Dont have an account yet? <a href="">Sign Up</a>
        </p>
      </form>
    </div>
  );
};

export default LogIn;
