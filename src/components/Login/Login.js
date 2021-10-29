
import LoginHeader from './LoginHeader';
import LoginMain from './LoginMain';
import axios from 'axios'
import React,{useEffect} from "react";



function Login() {

  // useEffect(() => {
  //   // axios.defaults.baseURL = 'http://localhost:3000';
  //   // axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
  //   // axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
  //   axios.get('https://click.ecc.ac.jp/ecc/tkida/portfolio/web/works/E-Gather/static/python/testAPI.py')
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
