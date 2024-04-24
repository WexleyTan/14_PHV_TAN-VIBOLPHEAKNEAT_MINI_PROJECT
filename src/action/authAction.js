import { registerService } from "@/service/auth.service"
export const registerServiceActions = async (data) => {

const registerUser = await registerService(data)
console.log(" Register : ", registerUser);
return registerUser
}