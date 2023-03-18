import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';

const SignUp = () => {
    const { createUser } = useContext(AuthContext)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [signUpError, setSignUpError] = useState('')

    const handleSignUp = (data) => {
        setSignUpError('')
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => { setSignUpError(error.message) })
    }
    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7 shadow-xl rounded-2xl'>
                <h2 className='font-bold text-xl text-center'>Sign Up</h2>
                <form onSubmit={handleSubmit(handleSignUp)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Name</span></label>
                        <input type="text"
                            className="input input-bordered w-full max-w-xs"
                            {...register("name", { required: "Name is required" })}
                        />
                        {errors.name && <p className='text-error mt-1'>{errors.name?.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Email</span></label>
                        <input type="email"
                            className="input input-bordered w-full max-w-xs"
                            {...register("email", { required: "Email is required" })}

                        />
                        {errors.email && <p className='text-error mt-1'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Password</span></label>
                        <input type="password" className="input input-bordered w-full max-w-xs"
                            {...register("password", {
                                required: "Password is required",
                                minLength: { value: 6, message: "Password must be 6 character or more" }
                            })}
                        />
                        {errors.password && <p className='text-error mt-1'>{errors.password?.message}</p>}
                    </div>

                    {
                        signUpError && <p className='text-center text-xs mt-1 text-error'>{signUpError}</p>
                    }
                    <input className='btn mt-5 btn-accent w-full' value="SignUp" type="submit" />
                </form>
                <p className='text-center text-xs mt-2'>Already have an account <Link className='text-secondary' to='/login'>Please login</Link> </p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full'>Continue with google</button>
            </div>
        </div>
    );
};

export default SignUp;