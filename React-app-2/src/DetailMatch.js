import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function DetailMatch(){
    const navigate = useNavigate();
    const param = useParams();
    const api = "https://632017599f82827dcf249b5f.mockapi.io/CricketMatch";

    const [data,setData] = useState({});
    useEffect(()=>{
        fetch(api +"/" + param.id)
        .then(res=>res.json())
        .then(res=>setData(res));
    },[])
    // useEffect(()=>{
    //     fetch(api+"getAll/detail/"+param.id)
    //     .then(res=>res.json())
    //     .then(res=>setData(res));
    //   },[]);
    return(
        <>
            <h3>{data.team1}</h3>
            <img src = {data.team1Img}  style={{width :"100px"}}/>
            <h3>{data.runTeam1}</h3>
            <h6>v/s</h6>
            <h3>{data.team2}</h3>
            <img src = {data.team2Img}  style={{width :"100px"}}/>
            <h3>{data.runTeam2}</h3>

            <button onClick={()=>{
        fetch(api+"/"+param.id,{method:"DELETE"})
        .then(res=>{
          navigate('/getAll');
        });
      }}>Delete</button>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button onClick={()=>{
        navigate('../getAll/edit/'+param.id);
      }}>Edit</button>
        </>
    )
}
export  default DetailMatch;