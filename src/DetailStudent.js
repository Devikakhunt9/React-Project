import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function DetailStudent(){
    const navigate = useNavigate();
    const param = useParams();

    const apiUrl = "https://631584805b85ba9b11e137e4.mockapi.io/StudentDetail";

    const [data,setData] = useState({});

    useEffect(()=>{
        fetch(apiUrl + "/"+param.id,{method :"GET"})
        .then(res=>res.json())
        .then(res=>setData(res));
    },[])

    return(<>
    

        <div class="row imgStudent">
            <div class="col-md-3 ">
                <div class="card " >
                    <img class="card-img-top" src={data.avatar}  alt="Card image cap" />
                    <div class="card-body">
                        <h5 class="card-title" onClick={()=>{
                                        navigate ('/studentDetail/'+data.id)
                                    }}>
                                        <center>{data.name}</center>
                                        
                        </h5>
                        {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                        {/* <center>
                            <table style={{width:"100%"}} >
                                <tr>
                                    <td>
                                        <button class="btn btn-primary" onClick={()=>{
                                        navigate('edit/'+data.id);
                                    }}>Edit</button>
                                    </td>
                                    <td>
                                    </td>
                                    <td>
                                    <button class="btn btn-primary" onClick={()=>{
                                        fetch(apiUrl+"/"+data.id,{method:"DELETE"})
                                        .then(res=>{
                                            // fetch(apiUrl)
                                            navigate("");
                                        });
                                        navigate("../")
                                    }}>Delete</button>
                                    </td>
                                </tr>
                            </table>
                        </center> */}
                    </div>
                 </div>
            </div>
            <div class="col-md-9">
                <h1 class="Profile">Profile</h1>
                <br />
                <table class="table">
                    <tbody>
                        <tr>
                            <th scope="row">Student</th>
                            <td>{data.name}</td>
                        </tr>
                        <tr>
                        <th scope="row">Dpartment</th>
                        <td>{data.department}</td>
                        </tr>
                        <tr>
                        <th scope="row">Mobile</th>
                        <td>{data.Mobile}</td>
                        </tr>
                        <tr>
                        <th scope="row">Email</th>
                        <td>{data.email}</td>
                        </tr>
                        <tr>
                        <th scope="row">Adreess</th>
                        <td>{data.street} , {data.street} , {data.state}</td>
                        </tr> 
                    </tbody>
                </table>
                {/* <h1>Profile</h1>
                <h4>
                <table>
                    <tr >
                        <td class="border border-primary">
                            Student
                        </td>
                        <td>
                            :
                        </td>
                        <td class="border border-primary">
                            {data.name}
                        </td>
                    </tr>
                    <tr >
                        <td class="border border-primary">
                            Department
                        </td>
                        <td>
                            :
                        </td>
                        <td class="border border-primary">
                            {data.department}
                        </td>
                    </tr>
                    <tr >
                        <td class="border border-primary">
                            Mobile
                        </td>
                        <td>
                            :
                        </td>
                        <td class="border border-primary">
                            {data.Mobile}
                        </td>
                    </tr>
                </table>
                </h4> */}
                
                {/* console.log('detail page is loded');
                <h4>Student : {data.name}</h4>
                <img src={data.avatar} style={{width:"100px"}} id="detailImg"/>
                <img src={data.avatar} alt="..." class="img-thumbnail" />  
                <h4> depart:{data.department}</h4>
                <h4>Mobile:{data.Mobile}</h4>
                <h4>email:{data.email}</h4>
                <h4>{data.street},{data.street},{data.state}</h4> */}
            </div>
        </div>
                
                {/* <button class="btn btn-primary">Edit</button>
                <button class="btn btn-primary">Delete</button> */}

    </>)
}

export default DetailStudent;