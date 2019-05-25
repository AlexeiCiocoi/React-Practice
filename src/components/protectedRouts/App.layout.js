import React from 'react'
import auth from './Auth'
export const AppLayout = (props) =>{
    return(
        <div> 
            <h4>App Layout</h4>
            <button onClick={
                ()=>{
                    auth.logout(
                        ()=>{
                             props.history.push('/')   
                            }
                    )
                }
                }>Logout</button>
        </div>
    )
}