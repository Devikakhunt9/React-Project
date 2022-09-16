import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './App.css';

function GetAllStudent(){
    const navigate = useNavigate();
    const apiUrl = "https://631584805b85ba9b11e137e4.mockapi.io/StudentDetail";
    const [data, setData] = useState([]);

    useEffect(()=>{
        fetch(apiUrl)
        .then(res=>res.json())
        .then(res=>setData(res));
    },[]);

    const formatedData = data.map((std)=>{
        return (
            // alert("HI");
            <div class="col-md-3 " style={{width: "18rem;"}}> 
                <div class="card myCard" >
                    <img class="card-img-top" src={std.avatar}  alt="Card image cap" />
                    <div class="card-body">
                        <center>
                        <h5 class="card-title myText btn btn-ligh" onClick={()=>{
                                        navigate ('/studentDetail/'+std.id)
                                    }}>
                                       {std.name}
                                        
                        </h5>
                        </center>
                        {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                        <center>
                            <table style={{width:"100%"}} >
                                <tr>
                                    <td>
                                        <button class="btn btn-primary" onClick={()=>{
                                        navigate('edit/'+std.id);
                                    }}>Edit</button>
                                    </td>
                                    <td>
                                    <button class="btn btn-danger" onClick={()=>{
                                        fetch(apiUrl+"/"+std.id,{method:"DELETE"})
                                        .then(res=>{
                                            // fetch(apiUrl)
                                            navigate("");
                                        });
                                        navigate("../")
                                    }}>Delete</button>
                                    </td>
                                </tr>
                            </table>
                        </center>
                    </div>
                </div>
            </div>);
    })

    return(
    <>
   
        <div class="row" style={{}}>
            {formatedData}
        </div>
    </>)
}


export default GetAllStudent;