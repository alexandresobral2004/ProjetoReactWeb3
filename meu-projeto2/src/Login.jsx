import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from './services/firebaseConnection'
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [validated, setValidated] = useState(false);
  const navigate = useNavigate(); // 2. Inicialize o hook

  async function SignupWithEmail(event) {
    event.preventDefault();
    event.stopPropagation();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      setValidated(true);
      return;
    }

    try {
      const userCredencial = signInWithEmailAndPassword(auth, email, password);
      const user = userCredencial.user;
      console.log(user);

      navigate('/home')


    } catch (error) {

    }


  };

  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-md-12 col-lg-12">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title text-center mb-4">Login</h3>
              <form onSubmit={SignupWithEmail}>
                <div className="mb-3">
                  <label htmlFor="emailInput" className="form-label">
                    E-mail
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="emailInput"
                    placeholder="seuemail@exemplo.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <div className="invalid-feedback">
                    Por favor, insira um e-mail válido.
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="passwordInput" className="form-label">
                    Senha
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="passwordInput"
                    placeholder="Sua senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    minLength="6"
                  />
                  <div className="invalid-feedback">
                    A senha deve ter no mínimo 6 caracteres.
                  </div>
                </div>
                <div className="d-grid">
                  <button type="submit" className="btn btn-primary">
                    Entrar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;