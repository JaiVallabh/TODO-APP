import {useParams,Link} from 'react-router-dom'
import { useState } from 'react'
import { retrieveHelloWorldPathVariable } from './api/HelloWorldApiService'
import { useAuth } from './Security/AuthContext'

export default function WelcomeComponent(){

    const {username} = useParams()

    const [message,setMessage]= useState(null)

    const authContext = useAuth()

    const token = authContext.token

    function callHelloWorldRestApi(){
        retrieveHelloWorldPathVariable(username,token)
            .then((response) => successfulResponse(response))
            .catch((error) => errorResponse(error))
            .finally(() => console.log('cleanup'))
    }

    function successfulResponse(response){
        console.log(response)
        setMessage(response.data.message)
    }

    function errorResponse(error){
        console.log(error)
    }

    return(
        <div className="Welcome">
            <h1>Welcome {username}</h1>
            <div>
                Your todos - <Link to="/todos">Go here</Link>
            </div>
            <div>
                <button className= "btn btn-success m-5" onClick = {callHelloWorldRestApi}>Call Hello World</button>
            </div>
            <div className ="text-info">
                {message}
            </div>
        </div>
    )
}