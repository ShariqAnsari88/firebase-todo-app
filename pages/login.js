import React from "react";
const LoginForm = () => {
    return (
        <main className="flex h-[100vh]">
            <div className="w-[60%] p-14 flex items-center">
                <div className="p-8 w-[600px]">
                    <h1 className="text-6xl font-semibold">Login</h1>
                    <p className="mt-6 ml-1">
                        Don't have an account ?{" "}
                        <span className="underline hover:text-blue-400 cursor-pointer">
                            Sign Up
                        </span>
                    </p>
                    <div className="mt-10 pl-1 flex flex-col">
                        <label>Email</label>
                        <input
                            type="text"
                            className="border-b border-black p-4 outline-0 focus-within:border-blue-400"
                        />
                    </div>
                    <div className="mt-10 pl-1 flex flex-col">
                        <label>Password</label>
                        <input
                            type="password"
                            className="border-b border-black p-4 outline-0 focus-within:border-blue-400"
                        />
                    </div>
                    <button className="bg-black text-white w-44 py-4 mt-10 rounded-full transition-transform hover:bg-black/[0.8] active:scale-90">
                        Sign in
                    </button>
                </div>
            </div>
            <div
                className="w-[40%] bg-slate-400 bg-cover bg-right-top"
                style={{
                    backgroundImage: "url('/login-banner.jpg')",
                }}
            ></div>
        </main>
    );
};

export default LoginForm;
