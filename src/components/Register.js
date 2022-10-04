import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  signInWithGoogle,
  registerWithEmailAndPassword,
} from "../firebase/firebase";

function Register() {

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setconfirmedPassword] = useState("");
  const [email, setEmail] = useState("");

  const [errors, setErrors] = useState({});

  const history = useHistory();

  const register = async (e) => {

    e.preventDefault();
    setErrors({});
    
    let errs = {};

    if (name && email && password) {

      if (confirmedPassword === password) {
        const d = await registerWithEmailAndPassword({
          email,
          password,
          displayName: name,
        });

        if (d.success) history.push("/dashboard");
        else errs.error = d.error;
      } else
        errs.confirmedPassword =
          "Confirmed password must be the same as password";
    } else {
      if (!email) errs.email = "the email must be required";

      if (!name) errs.name = "the name must be required";

      if (!password) errs.password = "the password must be required";

      if (!confirmedPassword)
        errs.confirmedPassword = "the confirmed password must be required";
    }
    setErrors(errs);
  };

  return (
    <div>
      <div className="container px-5 my-4">
        <form className=" w-50 mx-auto  bg-white p-4" onSubmit={register}>
          <h3 className="text-center my-2">Register Page</h3>

          {errors.error && (
            <div className="alert alert-danger" role="alert">
              {errors.error}
            </div>
          )}
          <input
            type="text"
            className="form-control my-3"
            name="full_name"
            placeholder="Full Name"
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && (
            <div className="alert alert-danger" role="alert">
              {errors.name}
            </div>
          )}
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              placeholder="Your Email"
              aria-describedby="emailHelp"
              onChange={(e) => setEmail(e.target.value)}
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
            {errors.email && (
              <div className="alert alert-danger" role="alert">
                {errors.email}
              </div>
            )}
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Your Password"
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
            />
            {errors.password && (
              <div className="alert alert-danger" role="alert">
                {errors.password}
              </div>
            )}
          </div>

          <input
            type="password"
            placeholder="Confirmed Password"
            onChange={(e) => setconfirmedPassword(e.target.value)}
            className="form-control"
          />
          {errors.confirmedPassword && (
            <div className="alert alert-danger" role="alert">
              {errors.confirmedPassword}
            </div>
          )}
          <button type="submit" className="btn btn-primary container mt-4">
            Submit
          </button>
          <p className="text-center my-2">Or</p>
          <button
            type="button"
            className="btn btn-secondary container"
            onClick={() => signInWithGoogle()}
          >
            Using Google <i className="bi bi-google"></i>
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
