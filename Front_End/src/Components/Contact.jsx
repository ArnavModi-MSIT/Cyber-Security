import React from 'react';
import { useForm } from 'react-hook-form';
import Input from './Input';

export default function ContactUs() {
    const { register, handleSubmit } = useForm();

    return (
        <div className="flex justify-center items-center min-h-screen bg-white">
            <div className="w-full lg:w-1/2 p-8 bg-[#222121] shadow-lg rounded-lg">
                <div className="text-2xl font-bold mb-6 text-center text-white">
                    Contact Us
                </div>
                <form onSubmit={handleSubmit()} className="space-y-4">
                    <div className="space-y-4">
                        <Input
                            label="Email:"
                            type="email"
                            placeholder="Enter your Email"
                            {...register("email", {
                                required: true,
                                validate: {
                                    matchPattern: (value) => 
                                        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) || 
                                        "Email address must be a valid address",
                                },
                            })}
                        />
                        <div>
                            <label className="block text-gray-700">Feedback:</label>
                            <textarea
                                className="w-full mt-1 p-2 border border-gray-300 rounded-lg h-20"
                                placeholder="Send your Feedback"
                                {...register("feedback", { required: true })}
                            />
                        </div>
                    </div>
                    <button 
                        type="submit" 
                        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}
