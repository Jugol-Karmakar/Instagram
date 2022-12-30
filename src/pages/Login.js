import React from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
  } = useForm();

  return (
    <div className="bg-gray-100">
      <div className="container min-h-screen mx-auto flex flex-col justify-center items-center">
        <div className="w-full max-w-sm py-6 px-10 bg-white border border-gray-300">
          <h2 className="font-CarterOne text-3xl text-center py-5">
            Mocospace
          </h2>
          <form>
            <div className="flex flex-col items-center mt-6">
              <div className="w-full max-w-xs mb-2">
                <div className="relative">
                  <input
                    {...register("email", {
                      required: {
                        value: true,
                        message: "Email is required",
                      },
                      pattern: {
                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                        message: "Provide a valid email",
                      },
                    })}
                    type="email"
                    placeholder="username or email address"
                    id="email"
                    className="peer w-full border rounded bg-gray-100 px-2 pt-2.5 pb-1.5 text-sm outline-none placeholder-transparent"
                    autoComplete="off"
                  />
                  <label
                    htmlFor="email"
                    className="absolute transition-all left-2 top-0 text-gray-400 text-xs peer-placeholder-shown:text-sm peer-placeholder-shown:top-2  cursor-text"
                  >
                    username or email address
                  </label>
                </div>
                <label className="label">
                  {errors.email?.type === "required" && (
                    <span className="label-text-alt text-red-600">
                      {errors.email.message}
                    </span>
                  )}
                  {errors.email?.type === "pattern" && (
                    <span className="label-text-alt text-red-600">
                      {errors.email.message}
                    </span>
                  )}
                </label>
              </div>

              <div className="w-full max-w-xs mb-4">
                <div className="relative">
                  <input
                    {...register("password", {
                      required: {
                        value: true,
                        message: "Password is required",
                      },
                      minLength: {
                        value: 6,
                        message: "Must be 6 characters or longer",
                      },
                    })}
                    type="password"
                    placeholder="Password"
                    id="password"
                    className="peer w-full border rounded bg-gray-100 px-2 pt-2.5 pb-1.5 text-sm outline-none placeholder-transparent"
                    autoComplete="off"
                  />
                  <label
                    htmlFor="password"
                    className="absolute transition-all left-2 top-0 text-gray-400 text-xs peer-placeholder-shown:text-sm peer-placeholder-shown:top-2 cursor-text"
                  >
                    Password
                  </label>
                </div>
                <label className="label">
                  {errors.password?.type === "required" && (
                    <span className="label-text-alt text-red-600">
                      {errors.password.message}
                    </span>
                  )}
                  {errors.password?.type === "minLength" && (
                    <span className="label-text-alt text-red-600">
                      {errors.password.message}
                    </span>
                  )}
                </label>
              </div>
              <input
                type="submit"
                value="Log in"
                className="w-full max-w-xs bg-cyan-500 text-sm text-white font-medium py-2 rounded-md cursor-pointer"
              />
            </div>
            <div className="flex justify-center items-center my-4">
              <div className="h-[1px] w-[100px] bg-gray-400"></div>
              <div className="mx-3 font-medium text-gray-500">OR</div>
              <div className="h-[1px] w-[100px] bg-gray-400"></div>
            </div>
            <div className="flex justify-center py-2">
              <button className="flex items-center text-center font-medium text-blue-700 text-base">
                <FcGoogle className="text-lg -ml-2 mr-1" />
                Log in with Google
              </button>
            </div>
            <div className="flex justify-center my-2">
              <p className="text-center text-sm font-medium text-cyan-600">
                <Link to="/signin">Forget Your Password?</Link>
              </p>
            </div>
          </form>
        </div>
        <div className="w-full max-w-sm p-6 bg-white border border-gray-300 mt-3">
          <p className="text-center text-gray-900">
            Don't have an account?{" "}
            <Link to="/signup" className="text-cyan-500 font-medium">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
