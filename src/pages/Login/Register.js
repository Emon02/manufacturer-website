import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { FaUserAlt } from "react-icons/fa";
import { BiAt } from "react-icons/bi";
import { IoIosFingerPrint } from "react-icons/io";
import { useForm } from 'react-hook-form';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';
import Loading from '../../components/Loading/Loading';

const Register = () => {
    const [
        createUserWithEmailAndPassword, user, loading, error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, uError] = useUpdateProfile(auth);
    const navigate = useNavigate();
    const location = useLocation();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const from = location.state?.from?.pathname || "/";
    
    const onSubmit = async (data) => {
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name });

        await toast.success('An user verification email has been sent to your email address. Please check your inbox or spam folder.', {
            theme: "colored",
        });
    }

    if (user) {
        console.log(user);
        navigate(from, { replace: true });
    }

    if (loading || updating) {
        return <Loading></Loading>;
    }

    if (error || uError) {
        toast.error(`Something went wrong. you got this error '${error?.message}'`, {
            theme: "colored",
        });
    }

    return (
        <section className="container mx-auto">
            <div className="w-full md:w-7/12 lg:w-8/12 xl:w-5/12 mx-auto">
                <div className="px-4 py-10 bg-white sm:px-6 lg:px-8 sm:py-16 lg:py-24">
                    <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl text-center">Create a new account</h2>
                    <form onSubmit={handleSubmit(onSubmit)} className="mt-8">
                        <div>
                            <div>
                                <label className="text-base font-medium text-gray-900"> Fast & Last name </label>
                                <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <FaUserAlt className='w-5 h-5'></FaUserAlt>
                                    </div>
                                    <input
                                        id="name" type="text" placeholder="Enter your full name"
                                        className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                                        aria-invalid={errors.name ? "true" : "false"}
                                        {...register('name', {
                                            required: {
                                                value: true,
                                                message: 'Name is Required'
                                            },
                                            minLength: {
                                                value: 3,
                                                message: 'Name must be 3 characters or longer.'
                                            }
                                        })} />
                                </div>
                                <label className="label pb-0">
                                    <label className="label">
                                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-600 font-semibold">{errors.name.message}</span>}
                                        {errors.name?.type === 'minLength' && <span className="label-text-alt text-red-600 font-semibold">{errors.name.message}</span>}
                                    </label>
                                </label>
                            </div>

                            <div>
                                <label className="text-base font-medium text-gray-900"> Email address </label>
                                <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <BiAt className='w-5 h-5'></BiAt>
                                    </div>

                                    <input
                                        type="email" id="email"
                                        placeholder="Enter email address"
                                        className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                                        aria-invalid={errors.email ? "true" : "false"}
                                        {...register('email', {
                                            required: {
                                                value: true,
                                                message: 'Email is Required'
                                            },
                                            pattern: {
                                                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                                message: 'Provide a valid email address.'
                                            }
                                        })} />
                                </div>
                                <label className="label pb-0">
                                    <label className="label">
                                        {errors.email?.type === 'required' && <span className="label-text-alt text-red-600 font-semibold">{errors.email.message}</span>}
                                        {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-600 font-semibold">{errors.email.message}</span>}
                                    </label>
                                </label>
                            </div>

                            <div>
                                <label className="text-base font-medium text-gray-900"> Password </label>
                                <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <IoIosFingerPrint className='w-5 h-5'></IoIosFingerPrint>
                                    </div>

                                    <input
                                        type="password" id="password"
                                        placeholder="Enter your password"
                                        className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                                        {...register("password", {
                                            required: {
                                                value: true,
                                                message: 'Password is Required'
                                            },
                                            minLength: {
                                                value: 8,
                                                message: 'Password must be 8 characters or longer.'
                                            }
                                        })}
                                        aria-invalid={errors.password ? "true" : "false"}
                                    />
                                </div>
                                <label className="label pb-0">
                                    <label className="label">
                                        {errors.password?.type === 'required' && <span className="label-text-alt text-red-600 font-semibold">{errors.password.message}</span>}
                                        {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-600 font-semibold">{errors.password.message}</span>}
                                    </label>
                                </label>
                            </div>

                            <div>
                                <label className="text-base font-medium text-gray-900"> Confirm Password </label>
                                <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <IoIosFingerPrint className='w-5 h-5'></IoIosFingerPrint>
                                    </div>

                                    <input
                                        type="password" id="confirmPassword"
                                        placeholder="Enter your password"
                                        className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                                        {...register("confirmPassword", {
                                            required: {
                                                value: true,
                                                message: 'Password is Required'
                                            },
                                            minLength: {
                                                value: 8,
                                                message: 'Password must be 8 characters or longer.'
                                            }
                                        })}
                                        aria-invalid={errors.confirmPassword ? "true" : "false"}
                                    />
                                </div>
                                <label className="label pb-0">
                                    <label className="label">
                                        {errors.confirmPassword?.type === 'required' && <span className="label-text-alt text-red-600 font-semibold">{errors.confirmPassword.message}</span>}
                                        {errors.confirmPassword?.type === 'minLength' && <span className="label-text-alt text-red-600 font-semibold">{errors.confirmPassword.message}</span>}

                                        {errors.password !== errors.confirmPassword && <span className="label-text-alt text-red-600 font-semibold" role="alert">Password and Confirm password didn't match, try again.</span>}

                                    </label>
                                </label>
                            </div>

                            <div className='pt-2'>
                                <button
                                    type="submit"
                                    className="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 border border-transparent rounded-md bg-gradient-to-r from-fuchsia-600 to-blue-600 focus:outline-none hover:opacity-80 focus:opacity-80"
                                >
                                    Sign up
                                </button>
                            </div>
                        </div>
                    </form>

                    <div className='py-5'>
                        <p className="mt-2 text-base text-gray-600">Already have an account? <Link to='/login' className="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline">Login</Link></p>
                    </div>
                    <div className="divider">OR</div>
                    <div className="mt-3 space-y-3">
                        <button
                            className="flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-gray-700 transition-all duration-200 bg-white border-2 border-gray-200 rounded-md hover:bg-gray-100 focus:bg-gray-100 hover:text-black focus:text-black focus:outline-none">
                            <FcGoogle className='w-6 h-6 mr-3'></FcGoogle>
                            Sign up with Google
                        </button>
                    </div>
                </div>
            </div>

        </section>

    );
};

export default Register;