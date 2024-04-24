"use client"

import { signUp } from "@/service/auth.service";
import { signOut } from "next-auth/react"

export const handleUserSignUp = async (data) => {
    const newUserSignUp = {
        firstname : data.get("firstname"),
        lastname : data.get("lastname"),
        email: data.get("email"),
        gender: data.get("gender"),
        password: data.get("password")
    };
    console.log("293eu9823ekjhqwjedhuwedd",newUserSignUp)
    await signUp(newUserSignUp);
}