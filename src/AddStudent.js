import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddStudent(){
    const navigate = useNavigate();

    const [data,setData] = useState({name:""});
    const apiUrl = "https://631584805b85ba9b11e137e4.mockapi.io/StudentDetail";


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
    <div class="form-group">
                <h2><label for="exampleInputEmail1">Name:</label></h2>
                <input type="text" class="form-control"  value={data.name} id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=>{
        setData({...data,name:e.target.value});
    }} />
            </div>
            <div class="form-group">
                <h2><label for="exampleInputPassword1">IMAGE(URL):</label></h2>
                <input type="text" class="form-control" id="exampleInputPassword1"  value={data.avatar} onChange={(e)=>{
        setData({...data,avatar:e.target.value});
    }} />
            </div>
            <br />
        <button type="button" class="btn border border-success myAdd" onClick={()=>{
    fetch(apiUrl,{
        method:"POST",
        body : JSON.stringify(data),
        headers:{
            "Content-Type":"application/json"
        }
    })
    .then((res)=>{
        navigate('/students')
    })
}
}>Add</button>
    <br />
    </>);

}


export default AddStudent;