import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
// import './App.css'

function GetAllMatch(){
    const navigate = useNavigate();
    const param = useParams();
    const [data,setData] = useState([]);
    const api = 'https://632017599f82827dcf249b5f.mockapi.io/CricketMatch';
    useEffect(()=>{
        fetch(api)
        .then(res=>res.json())
        .then(res=>setData(res));
    },[]);

    const formatedData = data.map((match)=>{
        return(
            <>
            <span onClick={()=>{
                navigate('/getAlldetail/' + match.id);
            }}>
                
            {match.team1} vs &nbsp;
            {match.team2}&nbsp;
            </span>
<br />

            </>
            
        );
    })
    return(
        <>
        <div class="container-fluid">
            {formatedData}
        </div>
        
        </>
    );
}


export default GetAllMatch;