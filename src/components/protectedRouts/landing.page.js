import React from 'react'
import auth from './Auth'
export const landingPage = props =>{
    console.log(props)
    return(
        <div>
            <div>Landing Page</div>
            <button onClick={
                ()=>{
                    auth.login(()=>{
                        props.history.push('/app')
                    })

                }
            }>Login</button>
        </div>
        
    )

}

 