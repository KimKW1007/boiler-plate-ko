import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../../_actions/user_action';

import "../../../App.css"


function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const emailRef = useRef(null);
  const PWRef = useRef(null);
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');

  const [ isEamil, setIsEamil ] = useState(false)
  const [ isPW, setIsPW ] = useState(false)

  const onEmailHandler = (e) => {
    setEmail(e.currentTarget.value);
  };
  const onPasswordHandler = (e) => {
    setPassword(e.currentTarget.value);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    let body = {
      email: Email,
      password: Password
    };

    dispatch(loginUser(body)).then((res) => {
      if (res.payload.loginSuccess) {
        navigate('/');
      } else {
        alert(res.payload.message);
      }
    });
  };

  const signUpLink =()=>{
    navigate('/register');
  }
  const lendingLink =()=>{
    navigate('/');
  }

  const onTransform = (e)=>{
    const current = e.target.innerText;
    const emailRefInputValue = emailRef.current.value;
    const PWRefInputValue = PWRef.current.value;
    if(current === 'Email'){
      if(PWRefInputValue === ""){
        setIsPW(false);
      }
      emailRef.current.focus();
      setIsEamil(true);
    }else{
      if(emailRefInputValue === ""){
        setIsEamil(false);
      }
      PWRef.current.focus();
      setIsPW(true);
    }
  }




  return (
    <div className='wrap'>
      <div className="container">
        <button className="home" title='Go to Home' onClick={lendingLink}><i className="xi-home"></i></button>
        <div className="title">Login</div>
        <form className='form' onSubmit={onSubmitHandler}>
          <div className={`inputWrap ${isEamil?"active":""}`}>
            <input type="email" ref={emailRef} value={Email} tabIndex="-1" onChange={onEmailHandler}/>
            <p onClick={onTransform}>Email</p>
          </div>
          <div className={`inputWrap ${isPW?"active":""}`}>
            <input type="password" ref={PWRef} value={Password} tabIndex="-1" onChange={onPasswordHandler} />
            <p onClick={onTransform}>Password</p>
          </div>
          <br />
          <button className='activeBtn'>로그인</button>
        </form>
        <button className="btn" onClick={signUpLink}>아직 회원이 아니신가요?</button>
      </div>
    </div>
  );
}

export default LoginPage;
