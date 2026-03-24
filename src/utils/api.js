export const apiRequest = async (endpoint,method="GET",body=null) => {
    const token = localStorage.getItem("token");
    const options = {
        method,
        headers:{
            "Content-Type":"application/json",
            Authorization:`Bearer ${token}`
        }
    }

    if(body){
        options.body = JSON.stringify(body);
    }

    const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}${endpoint}`,options);
    return response.json();
}