import { useState } from "react";
import styles from "./App.module.css";

function App() {
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <div className={styles.Somto}>
        <p className={styles.newPtag}>FORM INPUT</p>
      </div>
      <form>
        <label>Firstname</label>
        <input
          type="text"
          classname={styles.firstname}
          placeholder="John"
          value={firstName}
          onChange={(e) => setFirstname(e.target.value)}
        />

        <label>Lastname</label>
        <input
          type="text"
          classname={styles.lastname}
          placeholder="Doe"
          value={lastName}
          onChange={(e) => setLastname(e.target.value)}
        />

        <label>Email</label>
        <input
          type="text"
          classname={styles.email}
          placeholder="john_doe@yahoo.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>password</label>
        <input
          type="text"
          classname={styles.password}
          placeholder="min 6 characters, max 12characters"
          min="6"
          max="12"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </form>
    </>
  );
}

export default App;
