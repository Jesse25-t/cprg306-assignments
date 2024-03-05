"use client"

import { useUserAuth } from "./week-8/_utils/auth-context";

export default function Page(){
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
    return(
        <div>
            <h1>Week 8
            </h1>
            <p>{user ? "Hi There" : "Please sign In"}</p>
            {/* {user.email} */}
            {user && user.displayName}
            <p>
                {user ? (
                    <button onClick={firebaseSignOut}>Sign Out</button>
                ) : (
                    <button onClick={gitHubSignIn}>Sign in with GitHub</button>
                )}
            </p>
        </div>
    );
}