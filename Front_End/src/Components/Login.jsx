import React from 'react';
import { useForm } from 'react-hook-form';
import Input from './Input';
import { Link } from 'react-router-dom';

function Login() {
    const { register, handleSubmit } = useForm();

    return (
        <div className="m-auto w-4/5 sm:w-2/5 mt-32 bg-[#222121] p-8 rounded-2xl shadow-lg">
            <div className="text-center">
                <div className="mb-6">
                    <span className="text-white text-4xl font-bold">
                        logo
                    </span>
                </div>
                <h2 className="text-white text-3xl font-semibold mb-4">
                    Sign in to your account
                </h2>
                <p className="text-white mb-8">
                    Don&apos;t have any account?&nbsp;
                    <Link to="/signup" className="text-yellow-300 underline">Sign up</Link>
                </p>

                <form onSubmit={handleSubmit()} className="space-y-6">
                    <Input
                        type="email"
                        placeholder="Enter your Email"
                        className="w-full p-3 rounded-lg border border-transparent focus:border-yellow-300 focus:ring focus:ring-yellow-200"
                        {...register("email", {
                            required: true,
                            validate: {
                                matchPattern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) || "Email address must be a valid address",
                            }
                        })}
                    />
                    <Input
                        type="password"
                        placeholder="Enter your password"
                        className="w-full p-3 rounded-lg border border-transparent focus:border-yellow-300 focus:ring focus:ring-yellow-200"
                        {...register("password", {
                            required: true
                        })}
                    />
                    <button type="submit" className="w-full p-3 bg-yellow-300 text-indigo-900 font-semibold rounded-lg transition-colors duration-300 hover:bg-yellow-400">
                        Sign in
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Login;


