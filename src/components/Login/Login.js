
import LoginHeader from './LoginHeader';
import LoginMain from './LoginMain';
import axios from 'axios'
import React,{useEffect} from "react";



function Login() {

  axios.get('../../python/testAPI.py')
      .then(res => {
          console.log(res.data)
    })
  // useEffect(() => {
  //   axios.get('../../python/testAPI.py')
  //     .then(res => {
  //         console.log(res.data)
  //   })
  // }, [])

  return (
    <div>
      <LoginHeader/>
      <LoginMain/>
    </div>
  );
}

export default Login;
