
import {apiClient} from './ApiClient'



export const retrieveHelloWorldPathVariable = (username,token) => apiClient.get(`/hello-world/path-variable/${username}`,{
    headers : {
        Authorization : token
    }
})

export const executeBasciAuthenticationService = (token) => apiClient.get(`/basicauth`,{
    headers : {
        Authorization : token
    }
})
