"use client";
import React from "react";
import Image from "next/image";
import {signIn} from "next-auth/react";
import { useRouter } from "next/navigation";

//import { useRouter } from "next/navigation";

const LogInComponent = () => {
  const router = useRouter();
  async function handleLogin(userInfo) {
    const userInfoLogin = {
      email: userInfo?.get("email"),
      password: userInfo?.get("password"),
    };
    const res = await signIn("credentials",{
      redirect: false,
      ...userInfoLogin,
    });
    router.push("/todo-list")
    // if(res.ok){
    //   router.push("/todo-list")
    // }
  }

  return (
    <div>
      <div className="flex justify-between m-10">
        <Image src={"/assets/icons/logo.svg"} width={150} height={100} />
      </div>
      <div className="flex justify-evenly">
        <div>
          <form className="max-w-sm mx-auto" action={handleLogin}>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Login
              </label>
              <input
                type="email"
                id="email"
                name = "email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="Email"
                required
              />
            </div>
            <div className="mt-2">
              <input
                type="password"
                id="password"
                name = "password"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="*************"
                required
              />
            </div>
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 w-full text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-4"
            >
              Login
            </button>
            <div className="flex gap-2 pt-2">
              <p className="text-gray-600 text-sm">Don't have an account?</p>
              <a className="text-blue-700 text-sm" href="../register">
                Register
              </a>
            </div>

            {/* Continue */}
            <div className="mt-4 border-b border-[#D0D0D0] text-center">
              <div className="leading-none px-5 inline-block text-sm text-black tracking-wide font-medium bg-white transform translate-y-1/2">
                Continue with
              </div>
            </div>

            {/* Google */}

            <button
              type="submit"
              className="text-gray border border-gray-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 w-full text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-4"
            >
              Google
            </button>
          </form>
        </div>

        {/* Image */}
        <div>
          <img
            src="https://i.pinimg.com/564x/ca/72/f4/ca72f46eab82ccf96e9b941aa4f2ec45.jpg"
            alt=""
            className="w-96 h-96"
          />
        </div>
      </div>

      <p class=" m-5 text-gray font-normal text-sm">
        &copy; 2024 Neath Cutie Pie. All rights reservered.
      </p>
    </div>
  );
};
export default LogInComponent;
