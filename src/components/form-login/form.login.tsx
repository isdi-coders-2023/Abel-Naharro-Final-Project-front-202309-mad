import './form.login.scss';

export function FormLogin() {
  return (
    <section className="section-login">
      <div className="login-card">
        <h2>
          Welcome to <br />
          Todotechofertas
        </h2>
        <form>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />
          </div>
          <div>
            <p>Forgot your password?</p>
          </div>
          <div>
            <input type="submit" value="Sign In" />
          </div>
        </form>
      </div>
    </section>
  );
}
