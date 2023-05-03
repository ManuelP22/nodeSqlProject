import React, { useState } from 'react';
import '../assets/Login.css';
import user_icon from '../assets/img/user_icon.png';
import axios from 'axios';

const Login = () => {

  const [formState, setFormState] = useState({
        form: {
          user: "",
          password: ""
        },
        error: false,
        errorMsg: ""
    })
      
   const handleSubmit = e => {
      e.preventDefault()
    }

    const handleOnChange = async (e) => {
        await setFormState({
          ...formState,
          form: {
            ...formState.form,
            [e.target.name]: e.target.value
          }
        })
    }

    const handleButtonSubmit = () => {
        axios.post('', formState.form)
        .then(response => {
            console.log(response);
      })
    }

  return (
<>
    <div className="wrapper fadeInDown">
            <div id="formContent">
                <div className="fadeIn first">
                <br /><br />
                <img src={user_icon} width="100px" alt="User Icon" />
                <br /><br />
                </div>
                    <form onSubmit={handleSubmit}>
                    <input type="text" className="fadeIn second" name="user" placeholder="User" onChange={handleOnChange} />
                    <input type="password" className="fadeIn third" name="password" placeholder="Password" onChange={handleOnChange} />
                    <input type="submit" className="fadeIn fourth" value="Log In" onSubmit={handleButtonSubmit} />
                    </form>
                <div id="formFooter">
                <a className="underlineHover" href="#">Forgot Password?</a>
                </div>
            </div>
    </div>
</>
  )
}

export default Login