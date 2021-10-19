import React from 'react'
const auth=" https://accounts.spotify.com/authorize?client_id=9ac5cfe5519a4c2995283a75a4fedf1c&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-private%20user-read-email%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"

const Login = () => {
    return (
        <div className="container justify-content-center d-flex align-items-center" style={{maxHeight:"100vh"}}>
            <a href={auth} className="btn btn-success btn-lg">Start listening</a>
        </div>
    )
}

export default Login
