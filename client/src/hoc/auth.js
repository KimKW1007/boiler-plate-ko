import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { auth } from '../_actions/user_action'
import { useNavigate } from 'react-router-dom';
export default function (SpecificComponent, option, adminRoute = null) {
  // ** option **
  // null   =>  아무나 출입이 가능한 페이지
  // true   =>  로그인한 유저만 출입이 가능한 페이지
  // false  => 로그인한 유저는 출입 불가능한 페이지

  // adminRoute = true 어드민만
  function AuthenticationCheck(){

    const dispatch = useDispatch()
    const navigate = useNavigate();
    useEffect(()=>{
      dispatch(auth())
        .then(res => {
          console.log(res)
          if(!res.payload.isAuth){
            // 로그인 안 한 상태
            if(option){
              navigate("/login")
            }
          }else{
            // 로그인 상태
            if(adminRoute && !res.payload.isAdmin){
              navigate("/")
            }else{
              if(option === false){
                navigate("/")
              }
            }
          }
        })
    },[])

    return <SpecificComponent />
  }
  return <AuthenticationCheck/>
}
