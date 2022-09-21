import { useState } from "react";
import {  useNavigate } from "react-router-dom";

function AddMatch(){
    const navigate = useNavigate();
    const apiUrl = "https://632017599f82827dcf249b5f.mockapi.io/CricketMatch";   
    const [data, setData] = useState({});
    return(<>
        <h4>Team 1:</h4>
      <input type="text" onChange={(e)=>{
        setData({...data,team1:e.target.value});
      }} />
  
        <h4>Team 2:</h4>
            <input type="text" onChange={(e)=>{
                setData({...data,team2:e.target.value});
            }} />
      
      <h4>Team 1(Image - URL):</h4>
            <input type="text" onChange={(e)=>{
                setData({...data,team1Img:e.target.value});
            }} />
  
  <h4>Team 2 (Image - URL):</h4>
            <input type="text" onChange={(e)=>{
                setData({...data,team2Img:e.target.value});
            }} />

        <h4>Team 1 run:</h4>
            <input type="text" onChange={(e)=>{
                setData({...data,runTeam1:e.target.value});
            }} />
            <h4>Team 2 run:</h4>
            <input type="text" onChange={(e)=>{
                setData({...data,runTeam2:e.target.value});
            }} />
            
            <br />
      <input type="button" value="Add" onClick={()=>{
  
        fetch(apiUrl,{
          method:"POST",
          body:JSON.stringify(data),
          headers:{
            "Content-Type":"application/json"
          }
        })
        .then((res)=>{
          navigate('/getAll');
        })
      }} />
    </>);
  }

export default AddMatch;