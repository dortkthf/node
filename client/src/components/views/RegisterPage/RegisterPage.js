import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import {registerUser} from '../../../_actions/user_actions'
import {useNavigate} from 'react-router-dom' 
import Auth from '../../../hoc/auth'

function RegisterPage(props) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [Email, setEmail] = useState("")
  const [Name, setName] = useState("")
  const [Password, setPassword] = useState("")
  const [ConfirmPassword, setConfirmPassword] = useState("")

  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value)
  }
  const onNameHandler = (event) => {
    setName(event.currentTarget.value)
  }

  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value)
  }

  const onConfirmPasswordHandler = (event) => {
    setConfirmPassword(event.currentTarget.value)
  }
  const onSubmitHandler = (event) => {
    event.preventDefault();

    if(Password !== ConfirmPassword) {
      return alert('비밀번호와 비밀번호 확인은 같아야 합니다.')
    }

    let body = {
      email : Email,
      password: Password,
      name: Name
    }
    dispatch(registerUser(body))
      .then(response => {
        if(response.payload.success) {
          alert('회원가입을 축하드립니다.')
          navigate('/login')
        }else {
          alert('회원가입이 불가능합니다.');
        }
      })

  }


  return (
    <div style={{
      display: 'flex', justifyContent: 'center', alignItems:'center', width:'100%', height:'100vh'
    }}>
     <form style={{ display: 'flex', flexDirection:'column'}} onSubmit={onSubmitHandler}>
      <label>Email</label>
      <input type='email' value={Email} onChange={onEmailHandler}></input>
      <label>Name</label>
      <input type='text' value={Name} onChange={onNameHandler}></input>
      <label>Password</label>
      <input type='password' value={Password} onChange={onPasswordHandler}></input>
      <label>Confirm Password</label>
      <input type='password' value={ConfirmPassword} onChange={onConfirmPasswordHandler}></input>

      <br></br>
      <button type='submit'>회원가입</button>
     </form>
    </div>
  )
}

export default Auth(RegisterPage, false)