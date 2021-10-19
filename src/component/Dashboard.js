import React,{useState,useEffect} from 'react'
import axios from 'axios';
import spo from 'spotify-web-api-node';
import List from './List';
import Play from './Play';
const Dashboard = ({data}) => {
    const [token,settoken]=useState();
    const [refresh,setrefresh]=useState();
    const [erpire,seterpire]=useState();
    const [srs,  setsr]=useState();
    const [Result,  setResult]=useState([]);


  

useEffect(()=>{
 
    axios.post("http://localhost:3002/login",{code:data}).then((res)=>{
        console.log(res.data);
        
        setrefresh(res.data.refresh_token);
        seterpire(res.data.expires_In);settoken(res.data.access_Token);
       
      console.log("hey");
    }).catch((er)=>{
        console.log(er.message);
        window.location='/'
    })
   
},[data]);
const sr=(e)=>{
    setsr(e.target.value)
}
useEffect(()=>{
    if(!refresh ||!erpire)return
    const time=setInterval(() => {
        axios.post("http://localhost:3002/refresh",{
            refresh,
            expire:erpire
        }).then((res)=>{
            seterpire(res.data.expires_In);settoken(res.data.access_Token);
    
        }).catch(()=>{
            window.location='/'
            
            
            console.log("Err");})
    }, (erpire-60)*1000);
    return ()=>{
        clearInterval(time)
    }
   
},[refresh,erpire])
const tag=new spo({
    redirectUri:"http://localhost:3000",
    clientId:"9ac5cfe5519a4c2995283a75a4fedf1c",
    clientSecret:"6fb1e4dae48d4accbe3f4196fd4dc1e2"
})
useEffect(()=>{
    if(!token)return
    tag.setAccessToken(token)
},[tag]);
useEffect(()=>{
    if(!srs)return setResult([]);
    if(!token)return 


let cancel=false;
    tag.searchTracks(srs).then((res)=>{
        console.log(res.body);
        if(cancel)return
   setResult(  res.body.tracks.items.map((trap)=>{
    return{
        artist:trap.artists[0].name,
        images:trap.album.images[0].url,
        name:trap.name,
        ur:trap.uri,
        ad:trap.preview_url
    }
            }))
    }).catch(()=>{console.log("err");})
    return ()=>cancel=true;
},[srs,token]);

    return (
        <div className="container">
         

         <input class="form-control mt-3 mb-3" placeholder="search song here" type="search" onChange={sr} value={srs} aria-label="readonly input example"  />
         <h3>Songs</h3>
         <div className="row">
             <List data={Result} key={Result.ur} />
             <Play  ac={token}/>
         </div>
        </div>
    )
}

export default Dashboard
