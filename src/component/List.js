import React,{useEffect} from 'react'

const List = ({data}) => {
  
    return (
        <div className="container ">
            <div className="row m-auto d-flex justify-content-center">
            <div className="col-md-10 border-bottom" style={{overflowX:"auto",maxHeight:"450px"}}>
                {data.map((dt)=>(
                    <div className="d-flex f-row m-2 " style={{cursor:"pointer"}} onClick={()=>alert(`${dt.name}`)}>
                <img src={dt.images}className="border" style={{maxHeight:"70px",maxWidth:"120px"}} alt="images"/>
                <div className="d-flex ms-2" style={{flexDirection:"column"}}>
                    <span>{dt.artist}</span>
                    <span>{dt.name}</span>
                </div>
                <div className="d-flex ms-2" style={{flexDirection:"column"}}>
                    <audio controls >
                        <source src={dt.ad} type="audio/mp3"/>
                    </audio>
                </div>
            </div>
                ))}
           
            <div className="d-flex f-row m-2">
                <img src="https://www.freeiconspng.com/uploads/headphones-png-19.png"className="border" style={{maxHeight:"70px",maxWidth:"120px",padding:"0.5rem"}} alt="images"/>
                <div className="d-flex ms-2" style={{flexDirection:"column"}}>
                    <span>Song name</span>
                    <span>Artist name</span>
                </div>
            </div> <div className="d-flex f-row m-2">
                <img src="https://www.freeiconspng.com/uploads/headphones-png-19.png"className="border" style={{maxHeight:"70px",maxWidth:"120px"}} alt="images"/>
                <div className="d-flex ms-2" style={{flexDirection:"column"}}>
                    <span>Song name</span>
                    <span>Artist name</span>
                </div>
            </div> 
            
        </div>
            </div>
        </div>
       
    )
}

export default List