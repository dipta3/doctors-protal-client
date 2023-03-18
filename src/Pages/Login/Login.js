import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

const Login = () => {
    const { register, handleSubmit } = useForm();

    const handleLogin = data => {
        console.log(data)
    }
    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7 shadow-xl rounded-2xl'>
                <h2 className='font-bold text-xl text-center'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Email</span></label>
                        <input type="text" className="input input-bordered w-full max-w-xs" {...register("email")} />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Password</span></label>
                        <input type="password" className="input input-bordered w-full max-w-xs" {...register("password")} />
                    </div>
                    <label className="label"><span className="label-text">Forget Password?</span></label>

                    <input className='btn btn-accent w-full' value="Login" type="submit" />
                </form>
                <p className='text-center text-xs mt-2'>New to Doctors Portal <Link className='text-secondary' to='/signup'>Create new account</Link> </p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full'>Continue with google</button>
            </div>
        </div>

    );
};

export default Login;