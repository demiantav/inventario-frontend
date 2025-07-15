import { useState } from 'react';
import styles from './Login.module.css';

const Login = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  console.log(userName);

  return (
    <>
      <div className={styles.container_login}>
        <header className={styles.header_login}>
          <div>
            <img
              src="src/assets/solvensblanco.png"
              alt="Logo de la empresa"
              className={styles.logo_solvens}
            />
          </div>
        </header>

        <main className={styles.main_login}>
          <section>
            <header>
              <h1>Bienvenido!</h1>
              <p>Vamos a iniciar sesion en tu cuenta:</p>
            </header>

            <form action="submit">
              <div className={styles.form_login_container}>
                <label htmlFor="username">Usuario</label>
                <input
                  type="text"
                  value={userName}
                  placeholder="Ingrese su usuario"
                  onChange={({ target }) => setUserName(target.value)}
                />
                <label htmlFor="password">Contraseña</label>
                <input
                  type="password"
                  placeholder="Contraseña"
                  value={password}
                  onChange={({ target }) => setPassword(target.value)}
                />

                <button type="submit">Ingresar</button>
              </div>
            </form>
          </section>
        </main>
      </div>
    </>
  );
};

export default Login;
