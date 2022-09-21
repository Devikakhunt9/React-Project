import { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditMatch(){
 const param = useParams();
 const navigate = useNavigate();
 
 const apiUrl = "https://632017599f82827dcf249b5f.mockapi.io/CricketMatch";
 const [data,setData] = useState({});

 useEffect(()=>{
    fetch(apiUrl+"/"+param.id,{method:"GET"}).then(res=>res.json()).then(res=>setData(res));
 },[])
 return(
    <>
         <h4>Team 1:</h4>
      <input type="text" value={data.team1} onChange={(e)=>{
        setData({...data,team1:e.target.value});
      }} />
  
        <h4>Team 2:</h4>
            <input type="text" value={data.team2} onChange={(e)=>{
                setData({...data,team2:e.target.value});
            }} />
      
      <h4>Team 1(Image - URL):</h4>
            <input type="text" value={data.team1Img} onChange={(e)=>{
                setData({...data,team1Img:e.target.value});
            }} />
  
  <h4>Team 2 (Image - URL):</h4>
            <input type="text" value={data.team2Img} onChange={(e)=>{
                setData({...data,team2Img:e.target.value});
            }} />

        <h4>Team 1 run:</h4>
            <input type="text" value={data.runTeam1} onChange={(e)=>{
                setData({...data,runTeam1:e.target.value});
            }} />
            <h4>Team 2 run:</h4>
            <input type="text" value={data.runTeam2} onChange={(e)=>{
                setData({...data,runTeam2:e.target.value});
            }} />
            
  
      <input type="button" value="Edit" onClick={()=>{
  
        fetch(apiUrl +"/"+param.id,{
          method:"PUT",
          body:JSON.stringify(data),
          headers:{
            "Content-Type":"application/json"
          }
        })
        .then((res)=>{
          navigate('/getAll');
        })
      }} />
      {/* console.log({data}) */}
    </>
 )
}


export default EditMatch;