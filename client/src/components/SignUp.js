import React, { useState } from 'react'
import { Form, Button, Alert } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'


const SignUpPage = () => {



    const { register, watch, handleSubmit, reset,formState: { errors } } = useForm();

    const submitForm = (data) => {

        console.log(data)

        reset()


    }

    console.log(watch("username"));
    console.log(watch("email"));
    console.log(watch("password"))
    console.log(watch("confirmPassword"))

    return (
        <div className="container">
            <div className="form">

                <h1>Sign Up Page</h1>

                <form>
                    <Form.Group>
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text"
                            placeholder="Your username"
                            {...register("username", { required: true, maxLength: 25 })}
                        />
                        <br></br>
                        {errors.username && <span style={{ color: "red" }}>Username is required</span>}
                        <br></br>
                        {errors.username?.type=="maxLength"&&<span style={{ color: "red" }}>Max characters should be 25</span>}
                    </Form.Group>

                    <br></br>
                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email"
                            placeholder="Your email"
                            {...register("email", { required: true, maxLength: 80 })}
                        />
                        <br></br>
                        {errors.email && <span style={{ color: "red" }}>Email is required</span>}
                        <br></br>
                        {errors.email?.type=="maxLength"&&<span style={{ color: "red" }}>Max characters should be 80</span>}
                    </Form.Group>
                    <br></br>
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password"
                            placeholder="Your password"
                            {...register("password", { required: true, minLength: 8 })}

                        />
                        <br></br>
                        {errors.password && <span style={{ color: "red" }}>Password is required</span>}
                        <br></br>
                        {errors.password?.type=="minLength"&&<span style={{ color: "red" }}>Min characters should be 8</span>}
                    </Form.Group>
                    <br></br>
                    <Form.Group>
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" placeholder="Your password"
                            {...register("confirmPassword", { required: true, minLength: 8})}


                        />
                        <br></br>
                        {errors.confirmPassword && <span style={{ color: "red" }}>Confirm Password is required</span>}
                        <br></br>
                        {errors.confirmPassword?.type=="minLength"&&<span style={{ color: "red" }}>Min characters should be 8</span>}
                    </Form.Group>
                    <br></br>
                    <Form.Group>
                        <Button as="sub" variant="primary" onClick={handleSubmit(submitForm)}>SignUp</Button>
                    </Form.Group>
                    <br></br>
                    <Form.Group>
                        <small>Already have an account, <Link to='/login'>Log In</Link></small>
                    </Form.Group>
                    <br></br>
                </form>
            </div>
        </div>
    )
}

export default SignUpPage