import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import user_icon from '../assets/img/user_icon.png'
import '../assets/Login.css'

const Login = () => {
  const [formState, setFormState] = useState({
    
    form: {
      username: "",
      password: ""
    },
    error: false,
    errorMsg: ""
  })

  const navigate = useNavigate(); 

  const handleOnChange = (e) => {
    setFormState({
      ...formState,
      form: {
        ...formState.form,
        [e.target.name]: e.target.value
      }
    })
  }

  const handleButtonSubmit = (e) => {
    axios.post('https://api-dev.vimcashcorp.com/usuario/iniciarsesion', formState.form)
      .then(response => {
        if (response.status === "ok" && response.data.success) {
          localStorage.setItem("token", response.data.result.token);
          navigate('client/get')
        } else {
          // Si la respuesta es incorrecta, muestra un mensaje de error
          console.log(response.data.message);
        }
      })
      .catch(error => {
        console.log(error);
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
          <form onSubmit={handleButtonSubmit}>
            <input type="text" className="fadeIn second" name="username" placeholder="User" onChange={handleOnChange} />
            <input type="password" className="fadeIn third" name="password" placeholder="Password" onChange={handleOnChange} />
            <input type="submit" className="fadeIn fourth" value="Log In" />
          </form>
          <div id="formFooter">
            <a className="underlineHover" href="#">Forgot Password?</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login;
