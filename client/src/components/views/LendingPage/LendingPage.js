import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../../_actions/user_action';
import { useDispatch } from 'react-redux';


import "../../../App.css"



function LendingPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  /* useEffect(() => {
    axios.get('/api/hello').then((res) => console.log(res));
  }, []); */

  const [IsLogin, setIsLogin] = useState(null);

  const onClickHandler = () => {
    axios.get(`/api/users/logout`).then((res) => {
      console.log(res);
      if (res.data.success) {
        navigate('/login');
      } else {
        alert('Failed to LogOut');
      }
    });
  };

  const loginLink =()=>{
    navigate('/login');
  }
  const signUpLink =()=>{
    navigate('/register');
  }

  useEffect(() => {
    dispatch(auth()).then((res) => {
      setIsLogin(res.payload.isAuth);
    });
  }, []);
  return (
    <div className='wrap'>
      {IsLogin ?
      <h2 className='welcome'>
        로그인을 하셨군요?..<br />
        아직 준비가 덜 되었습니다..<br />
        다음에 와주세요 &#40;ㅠ..ㅠ&#41;
      </h2>
      :
      <h2 className='welcome'>
        어서오세요!
        <br />
        로그인을 해주세요!
        <br />
        아이디가 없다면 회원가입부터!
      </h2>
      
      }
      {IsLogin ?
        <button onClick={onClickHandler} className="logoutBtn titBtn">로그아웃</button>
        : 
        <div>
          <button onClick={loginLink} className="loginBtn titBtn">로그인</button>
          <button onClick={signUpLink} className="signUpBtn titBtn">회원가입</button>
        </div> 
      }
    </div>
  );
}

export default LendingPage;
