import React, { useState } from "react";

const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <>
      <form>
        <div className="input-data">
          <label htmlFor="fname">First Name</label>
          <input type="text" id="fname" onChange={ (e) => setFirstName(e.target.value) }  />
        </div>
        <div className="input-data">
          <label htmlFor="lname">Last Name</label>
          <input type="text" id="lname" onChange={ (e) => setLastName(e.target.value) }  />
        </div>
        <div className="input-data">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" onChange={ (e) => setEmail(e.target.value) } />
        </div>
        <div className="input-data">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" onChange={ (e) => setPassword(e.target.value) } />
        </div>
        <div className="input-data">
          <label htmlFor="confirm-password">Confirm Password</label>
          <input type="password" id="confirm-password" onChange={ (e) => setConfirmPassword(e.target.value) } />
        </div>
      </form>
      
      <p>Your Form Data</p>
      {firstName && <p>First Name {firstName}</p> }
      {lastName && <p>Last Name {lastName}</p> }
      {email && <p>Email {email}</p> }
      {password && <p>Password {password}</p> }
      {confirmPassword && <p>Confirm Password {confirmPassword}</p> }
    </>
  );
};

export default Form;
