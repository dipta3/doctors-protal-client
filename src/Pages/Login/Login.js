
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';

const Login = () => {
    const { signIn } = useContext(AuthContext)
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [loginError, setLoginError] = useState('')

    const handleLogin = data => {
        setLoginError('');
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => {
                setLoginError(error.message)
            })
    }
    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7 shadow-xl rounded-2xl'>
                <h2 className='font-bold text-xl text-center'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Email</span></label>
                        <input type="email"
                            className="input input-bordered w-full max-w-xs"
                            {...register("email", { required: "Email Address is required" })}
                        />
                        {errors.email && <p className='text-error mt-1'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Password</span></label>
                        <input type="password" className="input input-bordered w-full max-w-xs" {...register("password", {
                            required: "Password is Required",
                            minLength: { value: 6, message: "Password must be 6 Characters or longer" }
                        })} />
                        {errors.password && <p className='text-error mt-1'>{errors.password?.message}</p>}
                    </div>
                    <label className="label"><span className="label-text">Forget Password?</span></label>
                    {
                        loginError && <p className='text-center text-xs my-2 text-error'>{loginError}</p>
                    }

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