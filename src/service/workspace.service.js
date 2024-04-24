// import { getServerSession } from "next-auth";
// import { authOption } from "@/app/api/auth/[...nextauth]/route";
// import { headerToken } from "@/app/api/hearderToken";

import headerToken from "@/app/api/hearderToken";


export const getAllWorkSpace = async () => {
//     const header= await headerToken();
//     const session = await getServerSession(authOption);
//     console.log("token : ",session?.user?.token)
//     const res = await fetch (
//         "http://110.74.194.123:8989/api/todo/v1/workspaces" ,
//         {
//            headers: header
//         }
//     );
//    // const data  = await res.json(); 
//    // console.log(' data',data)
//     return res.json(); 
//hi
const header = await headerToken()
  const res = await fetch(
   "http://110.74.194.123:8989/api/todo/v1/workspaces",
    {
        method: "GET",
        headers: header
    }
  );
  return res.json();
}



export const CreateAllWorkSpace= async (workspace) => {
  const res = await fetch(
    ` http://110.74.194.123:8989/api/todo/v1/workspaces`,
    {
      method: "POST",
      body: JSON.stringify(userInfo),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const data = await res.json();
  return data;
};