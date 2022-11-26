import axios from 'axios';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { config } from './config';
import './login.css';

// function Login() {
//     const navigate=useNavigate();
//   const formik = useFormik({
//     initialValues: {
//       username: "",
//       password: ""
//     },
//     onSubmit: async (values) => {
//       try {
//         const login = await axios.post(`${config.api}/`, values);
//         alert(login.data.message);
//         localStorage.setItem("react_app_token",login.data.token);
//         localStorage.setItem("profile",login.data.profile);
//         if(login.data.message=="successfully logged in"){
//         navigate("/portal/dashboard");
//         }else{
//           navigate("/");
//         }
//       } catch (error) {
//         console.log("login error")
        
//       }
//     }
//   });
//   return (
//     <div className='container-fluid  qw'>
    
//       <div className='row pt-3'>
//         <div className='col-lg-4 '></div>
//         <div className='col-lg-4 mt-4'>
//           <form onSubmit={formik.handleSubmit} autoComplete="off" className='login'>
//             <h1>Login</h1>
//             <div className="form-group mt-2">

//               <label for="username">User Name</label>
//               <input type="text" className="form-control" id="username"  placeholder="Enter user name" name="username" value={formik.values.username} onChange={formik.handleChange} />

//             </div>
//             <div className="form-group mt-2">
//               <label for="exampleInputPassword1">Password</label>
//               <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" name="password" value={formik.values.password} onChange={formik.handleChange} />
//             </div>
//             <div className="form-check mt-2">
//               <input type="checkbox" className="form-check-input" id="exampleCheck1" />
//               <label className="form-check-label" for="exampleCheck1">Remember me</label>
//             </div>
//             <input type="submit" value='Login' className="btn btn-success  mt-2 " />
//             <div className="form-group mt-1">
//               <label>Don't have an account?<Link style={{ color: "yellow" }} to='/register'> Signup</Link></label>
//             </div>
//             <div className="form-group mt-1">
//               <label>----username & password=user----</label>
//               <label>----username & password=admin----</label>
              
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Login


function Login() {
  const navigate=useNavigate();
const formik = useFormik({
  initialValues: {
    email: "",
    password: ""
  },
  onSubmit: async (values) => {
    try {
      const login = await axios.post(`${config.api}/`, values);
      alert(login.data.message);
      localStorage.setItem("react_app_token",login.data.token);
      localStorage.setItem("profile",login.data.profile);
      if(login.data.message=="successfully logged in"){
      navigate("/portal/dashboard");
      }else{
        navigate("/");
      }
    } catch (error) {
      console.log("login error")
      
    }
  }
});
return (
  <>
<section class="vh-100 gradient-custom">
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-12 col-md-8 col-lg-6 col-xl-5">
        <div class="card bg-dark text-white" style="border-radius: 1rem;">
          <div class="card-body p-5 text-center">

            <div class="mb-md-5 mt-md-4 pb-5">
            <form onSubmit={formik.handleSubmit} autoComplete="off" className='login'>
              <h2 class="fw-bold mb-2 text-uppercase">Login</h2>
              <p class="text-white-50 mb-5">Please enter your login and password!</p>

              <div class="form-outline form-white mb-4">
                <input type="email" id="typeEmailX" class="form-control form-control-lg" />
                <label class="form-label" for="typeEmailX" value={formik.values.email} onChange={formik.handleChange}>Email</label>
              </div>

              <div class="form-outline form-white mb-4">
                <input type="password" id="typePasswordX" class="form-control form-control-lg" />
                <label class="form-label" for="typePasswordX" value={formik.values.password} onChange={formik.handleChange}>Password</label>
              </div>

              <p class="small mb-5 pb-lg-2"><a class="text-white-50" href="#!">Forgot password?</a></p>

              <button class="btn btn-outline-light btn-lg px-5" type="submit">Login</button>

              <div class="d-flex justify-content-center text-center mt-4 pt-1">
                <a href="#!" class="text-white"><i class="fab fa-facebook-f fa-lg"></i></a>
                <a href="#!" class="text-white"><i class="fab fa-twitter fa-lg mx-4 px-2"></i></a>
                <a href="#!" class="text-white"><i class="fab fa-google fa-lg"></i></a>
              </div>
                 </form>
            </div>

            <div>
              <p class="mb-0">Don't have an account? <a href="#!" class="text-white-50 fw-bold" to='/register'>Sign Up</a>
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</section></>
)};
export default Login