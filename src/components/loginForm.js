import React, { useState } from "react"
import styles from "./loginForm.module.css"

const LoginForm = () => {
  const [name, setName] = useState("")
  return (
    <section className={styles.contact}>
      <h3>Login</h3>
      <div className={styles.center}>
        <form>
          <div>
            <label htmlFor="name"></label>
            Display Name: <br />
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={e => setName(e.target.value)}
              className={styles.formControl}
            />
          </div>
          <br />
          <button type="submit" className={styles.submit}>
            Join Video Chat
          </button>
        </form>
      </div>
    </section>
  )
}
export default LoginForm
