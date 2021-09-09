import React, { useState } from "react";

import axios from "axios";

export const Register = () =>{
    return(
        <div>
            <>
        <form onSubmit={addNewUser}>
          <br />
          <input
            type="text"
            placeholder="First name"
            onChange={(e) => setFirstName(e.target.value)}
          />
          <br />
          <input
            type="text"
            placeholder="Last Name"
            onChange={(e) => setLastName(e.target.value)}
          />
          <br />
          <input
            type="text"
            placeholder="Country"
            onChange={(e) => setCountry(e.target.value)}
          />
          <br />
          <input
            type="text"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <input
            type="text"
            placeholder="Phone Number"
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <br />
          <input
            type="text"
            placeholder="Birthday"
            onChange={(e) => setBirthDate(e.target.value)}
          />
          <br />
          <input
            type="text"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button>Register</button>
          <br />
        </form>
        {message && <div>{message}</div>}
      </>

        </div>
    )
}