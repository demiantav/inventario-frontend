import styles from './LoginPage.module.css';

const Login = () => {
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
                <input type="text" placeholder="Ingrese su usuario" />
                <label htmlFor="password">Contraseña</label>
                <input type="password" placeholder="Contraseña" />

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
