import React, { useState, useEffect, useCallback } from "react";
import styles from "./App.module.css";

function App() {
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Error messages
  const [passwordErrorMsg, setPasswordErrorMsg] = useState('');
  const [emailErrorMsg, setEmailErrorMsg] = useState('');
  const [lastNameErrorMsg, setlastNameErrorMsg] = useState('')
  const [firstNameErrorMsg, setfirstNameErrorMsg] = useState('')


  const passwordErrorMsgHandler = useCallback(
    () => {
    if(password.length >= 6 && password.length <= 12){
      setPasswordErrorMsg("")
    }else {
      setPasswordErrorMsg('WRONG Password');
    }
    }, [password]
  )

  const emailErrorHandler = useCallback(() => {
    if(email.length === 0){
      setEmailErrorMsg('email should not be empty, daddy');
    }else if (!email.endsWith(".com")){
      setEmailErrorMsg('Invalid email address');
    }else if (email.lastIndexOf("@") === -1 || email.lastIndexOf("@") === 0){
      setEmailErrorMsg("Invalid email address (@ used innapropriately)");
    }else if(email.lastIndexOf('@') + 1 === email.lastIndexOf('.com')) {
      setEmailErrorMsg("Invalid email address (domain must exist)");
    }else{
      setEmailErrorMsg('')
    }
  }, [email]);


const lastNameErrorMsgHandler = useCallback(() => {
    if(lastName.length === 0){
      setlastNameErrorMsg('Enter your lastName, please');
    }
  }, [lastName]);

const firstNameErrorMsgHandler = useCallback(() => {
    if(firstName.length === 0){
      setfirstNameErrorMsg('Enter your Firstname, please');
    }
  }, [firstName]);

  useEffect(() => {
    passwordErrorMsgHandler();
  }, [password, passwordErrorMsgHandler]);

  useEffect(() => {
    emailErrorHandler();
  }, [email, emailErrorHandler]);

  useEffect(() => {
    lastNameErrorMsgHandler();
  }, [lastName, lastNameErrorMsgHandler]);

  useEffect(() => {
    firstNameErrorMsgHandler();
  }, [firstName, firstNameErrorMsgHandler]);
  

  return (
    <>
      <div className={styles.Somto}>
        <p className={styles.newPtag}>FORM INPUT</p>
      </div>
      <form>
        <div>
          <label>Firstname</label>
          <input
            type="text"
            className={styles.firstname}
            placeholder="John"
            value={firstName}
            onChange={(e) => setFirstname(e.target.value)}
          />
          <p className={styles.error}>{firstNameErrorMsg}</p>
        </div>
        <br />

        <div>
          <label>Lastname</label>
          <input
            type="text"
            className={styles.lastname}
            placeholder="Doe"
            value={lastName}
            onChange={e => setLastname(e.target.value)}
          />
          <p className={styles.error}>{lastNameErrorMsg}</p>
        </div>
        <br />

        <div>
        <label>Email</label>
        <input
          type="text"
          className={styles.email}
          placeholder="john_doe@yahoo.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p className={styles.error}>{emailErrorMsg}</p>
        </div>
        <br />


        <div>
        <label>password</label>
        <input
          type="password"
          className={styles.password}
          placeholder="min 6 characters, max 12characters"
          min="6"
          max="12"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            //errorMsg(e.target.value);
          }}
        />
       <p className={styles.error}> {passwordErrorMsg} </p>
       </div>
      </form>
    </>
  );
}

export default App;
