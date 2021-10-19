const express =require('express');
const port =process.env.PORT ||3002;
const app=express();
const cors =require('cors');
app.use(express.json())
app.use(express.urlencoded({extended:false}));
app.use(cors());
const spotify =require("spotify-web-api-node");

app.post('/login',(req,res)=>{
    const code=req.body.code;
    console.log(code);
    const gaana=new spotify({
        redirectUri:"http://localhost:3000",
        clientId:"9ac5cfe5519a4c2995283a75a4fedf1c",
        clientSecret:"6fb1e4dae48d4accbe3f4196fd4dc1e2"
    });
    gaana.authorizationCodeGrant(code).then((data)=>{
        res.status(200).json({
          
            refresh_token:data.body.refresh_token,
            scope:data.body.scope,
            expires_In:data.body.expires_in,  access_Token:data.body.access_token,
        })
        console.log("data mil gaya");
    }).catch((er)=>{
        console.log("kahi toh error hai");
        res.status(400).json({er:"data nhi milega"})
    })
});
 

app.post("/refresh",(req,res)=>{
    const ref=req.body.refresh;
    console.log("ref....");

    const gaana=new spotify({
        redirectUri:"http://localhost:3000",
        clientId:"9ac5cfe5519a4c2995283a75a4fedf1c",
        clientSecret:"6fb1e4dae48d4accbe3f4196fd4dc1e2",
refreshToken:ref,

    });
    gaana.refreshAccessToken().then(
        (data)=> {
      res.status({
        expires_In:data.body.expires_in,  access_Token:data.body.access_token,

      })
        },
        function(err) {
          console.log('Could not refresh access token', err);
        }
      );
})

app.listen(port,()=>{
    console.log(`Server started http://localhost:${port}`);
})