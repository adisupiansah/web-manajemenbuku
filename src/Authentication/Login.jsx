import "../style/login.css";
import logoLogin from "../assets/imgAuth/logo-register.png";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa6";
import { AuthContext } from "../Context/AuthProvider";
import { useState, useContext } from "react";

const Login = () => {
  // create state email and password login
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  // ambil provider login dan login google
  const { login, loginWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();

  // handle submit email dan password
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate('/') 
    } catch (error) {
      setError("login gagal");
    }
  };

  // handle login google
  const handleLoginWithGoogle = async () => {
    try {
      await loginWithGoogle();
      navigate('/');
    } catch {
      setError("login google gagal");
    }
  };

  return (
    <div className="container-fluid login">
      <div className="row vh-100 d-flex justify-content-center align-items-center">
        <div className="card">
          <div className="cardBody row">
            <div className="col-md-6 card-gambar-login rounded-start d-none d-sm-block">
              <div className="img"></div>
            </div>

            <div className="col-md-6 col-sm-12">
              {/* pesan error */}
              {error && <div className="alert alert-danger">{error}</div>}
              <div className="logo d-flex justify-content-center align-items-center">
                <img src={logoLogin} alt="" width="20%" />
              </div>

              <div className="form col-10 mx-auto">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3 input-with-icon">
                    <span className="icon">
                      <i className="bi bi-envelope-fill"></i>
                    </span>
                    <input
                      type="email"
                      className="form-control"
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Input email"
                      required
                    />
                  </div>

                  <div className="mb-3 input-with-icon">
                    <span className="icon">
                      <i className="bi bi-lock-fill"></i>
                    </span>
                    <input
                      type="password"
                      className="form-control"
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Input password"
                      required
                    />
                  </div>

                  <div className="tombol-login justify-content-center align-items-center d-flex">
                    <button type="submit" className="btn col-md-4 col-sm-6">
                      Login
                    </button>
                  </div>
                </form>
              </div>

              <div className="register-with row">
                <p className="text-center">--Login with--</p>

                <div className="d-flex justify-content-center align-items-center">
                  <button
                    onClick={handleLoginWithGoogle}
                    className="btn-register text-center"
                  >
                    <FaGoogle className="mx-1 icons-google" />
                    Account google
                  </button>
                </div>
              </div>

              <div className="sign-up">
                <Link to="/register" className="text-decoration-none">
                  dont have an account ? create now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
