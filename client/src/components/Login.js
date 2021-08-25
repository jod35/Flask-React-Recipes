import React, { useState } from 'react'
import {Form,Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {useForm} from 'react-hook-form'
import { login } from '../auth'
import {useHistory} from 'react-router-dom'


const LoginPage=()=>{
    
    const {register,handleSubmit,reset,formState:{errors}}=useForm()

    const history=useHistory()
    


    const loginUser=(data)=>{
       console.log(data)

       const requestOptions={
           method:"POST",
           headers:{
               'content-type':'application/json'
           },
           body:JSON.stringify(data)
       }
        
       fetch('/auth/login',requestOptions)
       .then(res=>res.json())
       .then(data=>{
           console.log(data.access_token)
           
           if (data){
            login(data.access_token)

            history.push('/')
           }
           else{
               alert('Invalid username or password')
           }


       })



       reset()
    }

    return(
        <div className="container">
        <div className="form">
            <h1>Login Page</h1>
            <form>
                <Form.Group>
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text"
                        placeholder="Your username"
                        {...register('username',{required:true,maxLength:25})}
                    />
                </Form.Group>
                {errors.username && <p style={{color:'red'}}><small>Username is required</small></p>}
                {errors.username?.type === "maxLength" && <p style={{color:'red'}}><small>Username should be 25 characters</small></p>}
                <br></br>
               
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password"
                        placeholder="Your password"
                        {...register('password',{required:true,minLength:8})}
                    />
                </Form.Group>
                {errors.username && <p style={{color:'red'}}><small>Password is required</small></p>}
                {errors.password?.type === "maxLength" && <p style={{color:'red'}}>
                    <small>Password should be more than 8 characters</small>
                    </p>}
                <br></br>
                <Form.Group>
                    <Button as="sub" variant="primary" onClick={handleSubmit(loginUser)}>Login</Button>
                </Form.Group>
                <br></br>
                <Form.Group>
                    <small>Do not have an account? <Link to='/signup'>Create One</Link></small>
                </Form.Group>
                
            </form>
        </div>
    </div>
    )
}

export default LoginPage