import React from "react";
import Image from "next/image";
import { registerServiceActions } from "@/action/authAction";
import { redirect } from "next/navigation";

const RegisterComponent = () => {
  async function handleRegister(userInfo) {
    "use server";
    console.log("user info : ", userInfo);

    const newUserInfo = {
      firstname: userInfo.get("firstname"),
      lastname: userInfo.get("lastname"),
      gender: userInfo.get("gender"),
      profile_url: userInfo.get("profile_url"),
      email: userInfo.get("email"),
      password: userInfo.get("password"),
    };

    const user = await registerServiceActions(newUserInfo);
    console.log(" User : ", user);
    if (user?.status === 200) {
      redirect("/login");
    }
  }

  return (
    <div>
      <div className="flex justify-between mt-20 ml-5">
        <Image src={"/assets/icons/logo.svg"} width={150} height={100} />
      </div>
      <form onSubmit={handleRegister} className="flex mx-auto mt-5">
        {/* firstname */}
        <div className="flex flex-col">
          <div className="mt-5">
            <label htmlFor="firstname" className="block text-gray-700 font-medium mb-2">
              First Name:
            </label>
            <input
              type="text"
              id="firstname"
              name="firstname"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="Enter your name"
              required
            />
          </div>
          {/* email */}
          <div className="mt-5">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="info@xzy.com"
              required
            />
          </div>
          {/* password */}
          <div className="mt-5">
            <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="*************"
              required
            />
          </div>
              {/* Submit Button */}
        <button
          type="submit"
          className="text-gray bg-blue-800 border border-gray-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-6"
        >
          Sign Up
        </button>
        </div>
        <div className="flex flex-col ">
          {/* Lastname */}
          <div className="mt-5">
            <label htmlFor="lastname" className="block text-gray-700 font-medium mb-2">
              Last Name:
            </label>
            <input
              type="text"
              id="lastname"
              name="lastname"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="Enter your name"
              required
            />
          </div>
          {/* gender */}
          <div className="mt-5">
            <label htmlFor="gender" className="block text-gray-700 font-medium mb-2">
              Gender:
            </label>
            <select
              id="gender"
              name="gender"
              className="border border-gray-400 p-2.5 w-full rounded-lg focus:outline-none focus:border-blue-400"
              required
            >
              <option value="">Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          {/* password */}
          <div className="mt-5">
            <label htmlFor="comfirmpassword" className="block text-gray-700 font-medium mb-2">
              Confirm Password:
            </label>
            <input
              type="password"
              id="comfirmpassword"
              name="comfirmpassword"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="*************"
              required
            />
          </div>
        </div>
        {/* Image */}
        <div className="ml-10">
          <img
            src="https://i.pinimg.com/564x/ca/72/f4/ca72f46eab82ccf96e9b941aa4f2ec45.jpg"
            alt=""
            className="w-96 h-96"
          />
        </div>
    
      </form>
    </div>
  );
};

export default RegisterComponent;
