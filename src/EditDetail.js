import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditDetail(){
    const param = new useParams();
    const navigate = new useNavigate();
    const apiUrl = "https://631584805b85ba9b11e137e4.mockapi.io/StudentDetail";

    useEffect(()=>{
        fetch(apiUrl+"/"+param.id,{methd:"GET"})
        .then(res=>res.json())
        .then(res=>setData(res))
    },[]);

    const [data,setData] = useState({});
    return(<>
    {/* <br />
    <br />
    <h2>Name:</h2>
    <input type="text" value={data.name} onChange={(e)=>{
        setData({...data,name:e.target.value});
    }} />
    <h2>Image(URL):</h2>
    <input type = "text" value={data.avatar} onChange={(e)=>{
        setData({...data,avatar:e.target.value});
    }} />
    <br />
    <br /> */}
    <br />
    <br />
            <div class="form-group">
                <h2><label for="exampleInputEmail1">Name:</label></h2>
                <input type="text" class="form-control"  value={data.name} id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=>{
        setData({...data,name:e.target.value});
    }} />
            </div>
            <div class="form-group">
                <h2><label for="exampleInputPassword1">IMAGE(URL)</label></h2>
                <input type="text" class="form-control" id="exampleInputPassword1"  value={data.avatar} onChange={(e)=>{
        setData({...data,avatar:e.target.value});
    }} />
            </div>
            <br />
            <br />
            <button type="submit" class="btn btn-light border-success myAdd" onClick={()=>{

                    fetch(apiUrl+"/"+param.id,{
                    method:"PUT",
                    body:JSON.stringify(data),
                    headers:{
                        "Content-Type":"application/json"
                    }
                    })
                    .then((res)=>{
                    console.log(res);
                    navigate('../../students');
                    })
                    }}>Edit
            </button>
            <br />
        
    {/* <input type="button" value="Edit student" class="btn btn-primary" /> */}
    </>)
}

export default EditDetail;