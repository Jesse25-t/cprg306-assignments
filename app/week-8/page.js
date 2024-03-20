"use client"

import { useUserAuth } from "./week-8/_utils/auth-context";
import Home from "../page";

export default function Page(){
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
    const notLoggedIn = () => { 
        return 
        <div>
            <h1>Week 8</h1>
            <p>"Please sign In"</p>
        </div>
    }
    return(
        <div className="flex flex-col items-center">
            <p>{user ? <Home/> : notLoggedIn}</p>
            {/* {user.email} */}
            {user && user.displayName}
            <p>
                {user ? (
                    <button className="text-green-700" onClick={firebaseSignOut}>Sign Out</button>
                ) : (
                    <button onClick={gitHubSignIn}>Sign in with GitHub</button>
                )}
            </p>
        </div>
    );
}