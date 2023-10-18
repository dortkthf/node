import React, {useEffect} from 'react'
import axios from 'axios';
import {Button} from 'antd'

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

  return (
    <Button type='primary'>LandingPage 랜딩페이지</Button>
  )
}

export default LandingPage

