import { useForm } from "react-hook-form";
import "./login.css";
const LogIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function handleOnSubmit(data) {
    console.log(data);
  }
  return (
    <div className="login-section">
      <div className="form-header">
        <h1>Welcome Back!</h1>
      </div>
      <form className="login-form" onSubmit={handleSubmit(handleOnSubmit)}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          id="username"
          {...register("username", {
            required: {
              value: true,
              message: "Username is required",
            },
          })}
        />

        <label htmlFor="">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          {...register("password", {
            required: { value: true, message: "password is required" },
          })}
        />

        {errors.username && <p className="error">{errors.username.message}</p>}
        {errors.password && <p className="error">{errors.password.message}</p>}

        <button type="submit">Log In</button>

        <p>
          Dont have an account yet? <a href="">Sign Up</a>
        </p>
      </form>
    </div>
  );
};

export default LogIn;
