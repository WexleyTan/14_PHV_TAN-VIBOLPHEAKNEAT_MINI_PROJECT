export const workspaceServiceActions = async (data) => {
    const workspace = await registerService(data)
    console.log(" Register : ", registerUser);
    return workspace
    }