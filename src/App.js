import React from 'react'
import Dashboard from './component/Dashboard';
import Login from './component/Login';
const code =new URLSearchParams(window.location.search).get('code');
const App = () => {
    return code ? <Dashboard data={code} />: (
        <div>
            <Login/>
            {code}
        </div>
    )
}

export default App
