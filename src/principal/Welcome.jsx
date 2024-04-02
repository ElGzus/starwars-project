import { useState, useEffect } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged
} from "firebase/auth";
import { auth } from "../firebase/config";
import { useNavigate } from "react-router-dom";
import "./welcome.css"

export function Welcome() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);
  const [registerInformation, setRegisterInformation] = useState({
    email: "",
    confirmEmail: "",
    password: "",
    confirmPassword: ""
  });

  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/src/principal/HomePage.jsx");
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate("/src/principal/HomePage.jsx");
      })
      .catch((err) => alert(err.message));
  };

  const handleRegister = () => {
    if (registerInformation.email !== registerInformation.confirmEmail) {
      alert("Please confirm that emails are the same");
      return;
    } else if (
      registerInformation.password !== registerInformation.confirmPassword
    ) {
      alert("Please confirm that passwords are the same");
      return;
    }

    createUserWithEmailAndPassword(
      auth,
      registerInformation.email,
      registerInformation.password
    )
      .then(() => {
        navigate("/src/principal/HomePage.jsx");
      })
      .catch((err) => alert(err.message));
  };

  return (
    <>
      <div className="welcome-body">
        <img
          className="img-starw mb-3"
          src="https://elcomercio.pe/resizer/TnNgWOuGpVY3hez2n36WaSEhAws=/1200x900/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/44OZTQPLXNGPDBWJ35QND7KXMA.jpg"
          alt="Halcon milenario"
          style={{
            width: "100px",
            height: "auto",
            transition: "transform 0.2s ease",
            borderRadius: "30%",
            animation: "meltAnimation 16s infinite"
          }}
        />
        <div className="container-1 container mt-5 card text-bg-dark bg-black" style={{
          width: "350px",
          height: "auto",
          borderRadius: "10%",
        }}>
          <img
            className="d-flex justify-content-center"
            src="https://rlv.zcache.com/svc/getimage?id=41e2f561-842f-490d-935b-736d44324f22&view_crop=0%2C0%2C1%2C1&max_dim=300&uhmc=cwOCjfK-X8DJbxbIFmZFWiB5uSM1"
            alt="starwars logo"
            style={{
              width: "190px",
              height: "auto",
              margin: "auto",
            }}
          />
          <div className="row justify-content-center" style={{
            display: "flex",
            padding: "20px"
          }}>
            <div className="col-md-12">
              {isRegistering ? (
                <>
                  <h2>Register</h2>
                  <div className="mb-3 row">
                    <div className="col-sm-12">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Set email"
                        value={registerInformation.email}
                        onChange={(e) =>
                          setRegisterInformation({
                            ...registerInformation,
                            email: e.target.value
                          })
                        }
                      />
                    </div>
                  </div>
                  <div className="mb-3 row">
                    <div className="col-sm-12">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Confirm email"
                        value={registerInformation.confirmEmail}
                        onChange={(e) =>
                          setRegisterInformation({
                            ...registerInformation,
                            confirmEmail: e.target.value
                          })
                        }
                      />
                    </div>
                  </div>
                  <div className="mb-3 row">
                    <div className="col-sm-12">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Set Password"
                        value={registerInformation.password}
                        onChange={(e) =>
                          setRegisterInformation({
                            ...registerInformation,
                            password: e.target.value
                          })
                        }
                      />
                    </div>
                  </div>
                  <div className="mb-3 row">
                    <div className="col-sm-12">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Confirm password"
                        value={registerInformation.confirmPassword}
                        onChange={(e) =>
                          setRegisterInformation({
                            ...registerInformation,
                            confirmPassword: e.target.value
                          })
                        }
                      />
                    </div>
                  </div>
                  <div className="mb-3 row">
                    <div className="col-sm-12 container-buttons">
                      <button
                        onClick={handleRegister}
                        className="btn-1"
                      >
                        Register
                      </button>
                      <button
                        onClick={() => setIsRegistering(false)}
                        className="btn-2"
                      >
                        Back
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <div className="">
                  <h2>LogIn</h2>
                  <div className="mb-3 row">
                    <div className="col-sm-12">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        value={email}
                        onChange={handleEmailChange}
                      />
                    </div>
                  </div>
                  <div className="mb-3 row">
                    <div className="col-sm-12">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        value={password}
                        onChange={handlePasswordChange}
                      />
                    </div>
                  </div>
                  <div className="mb-3 row">
                    <div className="col-sm-12 container-buttons">
                      <button
                        onClick={handleSignIn}
                        className="btn-3"
                      >
                        LogIn
                      </button>
                      <button
                        onClick={() => setIsRegistering(true)}
                        className="btn-4"
                      >
                        SignIn
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
