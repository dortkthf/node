import React, {useEffect} from 'react'
import axios from 'axios';
import {useNavigate} from 'react-router-dom' 
import Auth from '../../../hoc/auth'


function LandingPage() {

  useEffect(()=> {
    axios.get('/api/hello')
    .then(response => {
        console.log(response)
    })
    .catch(error => {
        console.error('에러 내용', error)
    })
  }, [])
  const navigate = useNavigate()

  const onClickHandler = () => {
    axios.get(`/api/users/logout`)
    .then(response => {
      console.log(response.data)
      if(response.data.success) {
        navigate('/login')
        alert('로그아웃이 완료되었습니다.')
      } else {
        alert('로그아웃 하는데 실패 했습니다.')
      }
    })
  }

  return (
      <div style={{
        display: 'flex', justifyContent: 'center', alignItems:'center', width:'100%', height:'100vh'
      }}>
        <h2>시작 페이지</h2>

        <button onClick={onClickHandler}>로그아웃</button>
      </div>
    )
}

export default Auth(LandingPage, null);

