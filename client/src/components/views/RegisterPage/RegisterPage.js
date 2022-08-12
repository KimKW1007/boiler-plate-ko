import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registernUser } from '../../../_actions/user_action';
import { useNavigate } from 'react-router-dom';

import "../../../App.css"




function RegisterPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [Name, setName] = useState('');
  const [ConfirmPassword, setConfirmPassword] = useState('');

  const onEmailHandler = (e) => {
    setEmail(e.currentTarget.value);
  };
  const onPasswordHandler = (e) => {
    setPassword(e.currentTarget.value);
  };
  const onNameHandler = (e) => {
    setName(e.currentTarget.value);
  };
  const onConfirmPasswordHandler = (e) => {
    setConfirmPassword(e.currentTarget.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if(Password !== ConfirmPassword){
      return alert("비밀번호와 비밀번호 확인은 같아야 합니다.")
    }
    let body = {
      email: Email,
      name: Name,
      password: Password
    };
    

    dispatch(registernUser(body)).then((res) => {
      if(res.payload.success){
        navigate('/login')
      }else{
        alert("Failed to sign up")
      }
    });
  };


  const lendingLink =()=>{
    navigate('/');
  }
  const loginLink =()=>{
    navigate('/login');
  }

  return (
    <div className='wrap regi'>
      <div className="container">
        <button className="home" title='Go to Home' onClick={lendingLink}><i className="xi-home"></i></button>
        <div className="title">Sign Up</div>
        <form className='form' onSubmit={onSubmitHandler}>
          <label htmlFor="">Email</label>
          <input type="email" value={Email} onChange={onEmailHandler} required />
          <label htmlFor="">Name</label>
          <input type="text" value={Name} onChange={onNameHandler} required />
          <label htmlFor="">Password</label>
          <input type="password" value={Password} onChange={onPasswordHandler} required />
          <label htmlFor="">Confirm Password</label>
          <input type="password" value={ConfirmPassword} onChange={onConfirmPasswordHandler} required />
          <br />
          <button className='activeBtn'>회원 가입</button>
        </form>
        <button className="btn" onClick={loginLink}>잘못 들어왔어요. 로그인 할래요!</button>

      </div>
      
    </div>
  );
}

export default RegisterPage;
